import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        fedna.dev
      </h1>
      <p className="mb-4">
        {`You have landed in the engine room. The real story, the thinking, and the serious stuff lives at our homepage linked below. This domain exists so ideas can ship fast, break faster, and quietly turn into products.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
