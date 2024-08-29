<!-- client/src/components/CreateEvent.vue -->
<template>
    <div>
        <h2>Create New Event</h2>
        <form @submit.prevent="createEvent">
            <input v-model="name" placeholder="Event Name" />
            <input type="date" v-model="date" />
            <input v-model="location" placeholder="Location" />
            <textarea v-model="description" placeholder="Event Description"></textarea>
            <input type="file" @change="onFileChange" />
            <button type="submit">Create Event</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            date: '',
            location: '',
            description: '',
            coverPhoto: null,
        };
    },
    methods: {
        async createEvent() {
            const formData = new FormData();
            formData.append('name', this.name);
            formData.append('date', this.date);
            formData.append('location', this.location);
            formData.append('description', this.description);
            formData.append('coverPhoto', this.coverPhoto);

            try {
                const res = await axios.post('http://localhost:5000/api/events/create', formData);
                alert('Event created successfully');
            } catch (error) {
                console.error(error);
            }
        },
        onFileChange(e) {
            this.coverPhoto = e.target.files[0];
        },
    },
};
</script>
