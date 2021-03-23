import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../../components/HelloWorld/HelloWorld.vue"; // @ is an alias to /src

@Component({
    name: "UserPage",
    components: {
        HelloWorld
    }

})
export default class User extends Vue {

    public usernameInput = '';

    public changeUsername() {
        console.log(this.usernameInput);
    }

}