import Link from "../src/components/Link"
import Title from "../src/components/Title"


export default function HomePage() {
    return (
        <div>
            <Title as="h1">Home Page</Title>
            <Link href="/institucional/faq">
                Ir para FAQ
            </Link>
        </div>
    )
}