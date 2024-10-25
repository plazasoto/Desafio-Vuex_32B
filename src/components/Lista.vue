<template>
    <div>
        <h3>Lista de juegos</h3>
    
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Stock</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody v-for="(juego, index) in juegos">
                <tr>
                    <td :style="{ borderColor: juego.color }">{{ juego.codigo }}</td>
                    <td :style="{ borderColor: juego.color }">{{ juego.nombre }}</td>
                    <td :style="{ borderColor: juego.color }">{{ juego.stock }}</td>
                    <td :style="{ borderColor: juego.color }">{{ juego.precio }}</td>
                    <td :style="{ borderColor: juego.color }">
                        <button @click="stockUp(index)"> + </button>
                        <button @click="stockDown(index)"> - </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
    table, th, td{
        border-style: solid;
        border-color: black;
        border-width: 1pt;
        border-radius: 2pt;
    }
</style>

<script>
    import {mapState, mapActions} from 'vuex';
    export default{
        name:'Lista',
        computed:{
            ...mapState(['juegos'])
        },
        methods:{
            ...mapActions(['stockUp', 'stockDown'])
        }
    }
</script>