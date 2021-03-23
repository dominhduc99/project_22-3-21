import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../../components/HelloWorld/HelloWorld.vue"; // @ is an alias to /src

@Component({
    components: {
        HelloWorld,
    },

})
export default class Home extends Vue {
    beforeCreate() {
        console.log('beforeCreate')
    }
    created() {
        console.log('created');

    }
    beforeMount() {
        console.log('beforeMount');

    }
    mounted() {
        console.log('mounted');

    }
    beforeUpdate() {
        console.log('beforeUpdate');

    }
    updated() {
        console.log('updated');

    }
    beforeDestroy() {
        console.log('beforeDestroy');

    }
    destroyed() {
        console.log('destroy');

    }

}