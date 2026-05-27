import Image from "next/image";
import styles from "./testimonial-section.module.css";

const testimonials = [
  {
    quote:
      "CompuX helped us respond to leads faster and keep every WhatsApp conversation organized in one place.",
    name: "Vaibhav Surana",
    role: "Director",
    company: "Ranavilas",
    metric: "42% faster response",
    image: "/testimonials/vaibhav.png",
  },
  {
    quote:
      "The campaign tools made broadcasts simple for our team, and the dashboard gave us clear delivery insights.",
    name: "Surendra Kumar Surana",
    role: "Managing Director",
    company: "JANTV",
    metric: "3.2x campaign reach",
    image: "/testimonials/Sam-sir-02.jpg",
  },
  {
    quote:
      "Template automation saved hours every week. We now launch customer updates without waiting on work.",
    name: "Ajay Kumar Surana",
    role: "MD",
    company: "IT-Neer",
    metric: "18 hrs saved weekly",
    image: "/testimonials/ajay-sir-01.jpg",
  },
];

export function TestimonialSection() {
  return (
    <section id="testimonials" className="container mx-auto px-6 py-24">
      <div className="mx-auto mb-14 max-w-3xl text-center animate-fade-up">
        {/* <p className={styles.eyebrow}>Customer Stories</p> */}

        <h2 className="mb-4 text-4xl font-bold">
          Trusted by Teams Worldwide
        </h2>

        <p className="text-gray-400">
          Real feedback from businesses using CompuX to manage campaigns,
          automate replies, and convert conversations into growth.
        </p>
      </div>

      <div className={styles.grid}>
        {testimonials.map((testimonial, index) => (
          <article
            key={testimonial.name}
            className={`${styles.card} animate-fade-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.metric}>{testimonial.metric}</div>

            <p className={styles.quote}>{testimonial.quote}</p>

            <div className={styles.profile}>
              <div className={styles.avatar}>
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} profile photo`}
                  width={72}
                  height={72}
                  className={styles.avatarImage}
                />
              </div>

              <div>
                <h3>{testimonial.name}</h3>
                <p>
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
