import { Badge } from "./ui/badge"
import HeroImage from "./hero-image"
import { Icon1, Icon2, Icon3, Icon4, Icon5 } from "./ui/features-icons"

const features = [
  {
    name: "Live Polling",
    description: "Move beyond guesses and gut feelings. Collect instant input from your audience and see the results unfold in real time.",
    icon: Icon3
  },
  {
    name: "Word Clouds",
    description: "Turn raw responses into clear patterns. Watch ideas fill the screen and spark conversations that wouldn't happen otherwise.",
    icon: Icon4
  },
  {
    name: "AI Presentation Builder",
    description: "Skip the blank slide. Outline your idea and let AI draft a full presentation that you can polish and make your own.",
    icon: Icon5
  },
  {
    name:
      "Seamless with Teams, Slack & Meet",
    description: "No need to break your workflow. Outlinr connects with the tools you already use so presenting and sharing feels natural.",
    icon: Icon2
  },
  {
    name: "Audience Q&A",
    description: "Every voice matters. Anonymous questions make it easy for your audience to speak up and ask what's really on their mind.",
    icon: Icon1
  },
  {
    name: "Quizzes & Surveys",
    description: "Keep attention high while learning more about your audience. Quick checks or deeper surveys give you insights you can act on.",
    icon: Icon2
  },
]

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="code-example-title"
      className="mx-auto mt-28 w-full max-w-6xl px-3"
    >
      <Badge>Built for real connection</Badge>
      <h2
        id="code-example-title"
        className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl font-space-grotesk"
      >
        Features that turn <br /> slides into conversations
      </h2>
      <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600">
        Outlinr blends design and interaction into one simple flow. <br /> Create, present, and engage your audience without juggling different tools.
      </p>
      <div
        className="relative mx-auto ml-3 mt-20 h-fit w-[40rem] max-w-6xl animate-slide-up-fade sm:ml-auto sm:w-full sm:px-2"
        style={{ animationDuration: "1400ms" }}
      >
        <HeroImage imageSrc="/images/live-polling.png" />
      </div>
      <dl className="mt-24 grid grid-cols-3 gap-10">
        {features.map((item) => (
          <div
            key={item.name}
            className="col-span-full sm:col-span-2 lg:col-span-1"
          >
            {/* <div className="w-fit rounded-lg p-2 shadow-md shadow-indigo-400/30 ring-1 ring-black/5 "> */}
            <item.icon
              aria-hidden="true"
            />
            {/* </div> */}
            <dt className="mt-6 font-semibold text-gray-900">
              {item.name}
            </dt>
            <dd className="mt-2 leading-7 text-gray-600">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
