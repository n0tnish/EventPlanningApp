<!-- client/src/components/EventDisplay.vue -->
<template>
    <div>
        <h1>{{ event.name }}</h1>
        <p>{{ event.description }}</p>
        <p>{{ event.location }}</p>
        <p>{{ event.date }}</p>
        <img :src="event.coverPhoto" alt="Event Cover Photo" />
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            event: {},
        };
    },
    async created() {
        const eventId = this.$route.params.id;
        const res = await axios.get(`http://localhost:5000/api/events/${eventId}`);
        this.event = res.data;
    },
};
</script>
