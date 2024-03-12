import { HomeBlog } from "./HomeBlog"
import { HomeNewsletter } from "./HomeNewsletter"

function HomeBottom() {
    return(
        <div class="container2">
            <HomeBlog title={"Najnovije s bloga"}/>
            <HomeNewsletter />
        </div>
    )
}

export {HomeBottom}