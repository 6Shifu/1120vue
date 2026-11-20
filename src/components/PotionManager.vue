<script setup>
</script>

<script>
    export default {
        name: 'PotionManager',
        data() {
            return {
                potions: [],
            };
        },
        methods:{
            async LoadPotions() {
                this.potions = await getPotions();
            },

        },
        mounted() {
            this.LoadPotions();
        }
    }
</script>

<template>
    <form @submit.prevent="createPotion">
        <input type="text" v-model="newPotion.name" placeholder="Potion Name" />
        <input type="text" v-model="newPotion.effect" placeholder="Potion Effect" />
        <label>
            <input type="checkbox" v-model="newPotion.isDangerous" />
            Is Dangerous
        </label>
        <button type="submit">Create Potion</button>
    </form>
</template>