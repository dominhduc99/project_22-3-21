import { Component, Vue } from "vue-property-decorator";


@Component({
    name: "AboutPage",
    components: {

    }

})

export default class About extends Vue {
    public About() {
        console.log('day la trang about');
    }

}