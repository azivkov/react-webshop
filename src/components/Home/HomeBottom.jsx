import { HomeBlog } from "./HomeBlog"
import { HomeNewsletter } from "./HomeNewsletter"

function HomeBottom() {
    return(
        <div class="container2">
            <HomeBlog />
            <HomeNewsletter />
        </div>
    )
}

export {HomeBottom}