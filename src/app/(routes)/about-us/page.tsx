import DynamicBreadcrumb from '@/app/DynamicBreadcrumb'
import { Image } from 'antd'

const AboutUs = () => {
  return (
    <div className=" flex flex-col justify-center mb-20">
      <div
        style={{
          backgroundImage: 'url("/aboutUs/about-us-banner.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="py-10"
      >
        <div className="text-3xl font-bold responsive-width !mb-6">
          About Us
        </div>
        <div className="responsive-width !mb-6">
          <DynamicBreadcrumb />
        </div>
      </div>
      <section className="flex !my-20 items-center justify-center responsive-width">
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="/aboutUs/about-us.png"
            alt="about-us"
            preview={false}
            className="max-w-[500px] w-full"
          />
        </div>
        <div className="w-1/2">
          <div className="text-red-500 mb-5">
            Where Sports Meets the Stock Market
          </div>
          <div>
            Athletecs is the world’s first athlete-based stock market that
            transforms the way fans connect with their favorite players. We let
            users buy, sell, and trade virtual shares of athletes—turning
            passion into potential profit.
          </div>

          <div className="flex items-start gap-5 mt-10">
            <div>
              <Image src="/aboutUs/mission-img.svg" alt="mission" />
            </div>
            <div>
              <div className="text-xl">Our Mission</div>
              <div className="text-gray-400">
                To revolutionize fan engagement by merging the thrill of sports
                with the power of financial markets. We aim to create a space
                where fans don’t just watch the game—they become part of it.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-5 mt-10">
            <div>
              <Image src="/aboutUs/vision-img.svg" alt="mission" />
            </div>
            <div>
              <div className="text-xl">Our Vision</div>
              <div className="text-gray-400">
                To revolutionize fan engagement by merging the thrill of sports
                with the power of financial markets. We aim to create a space
                where fans don’t just watch the game—they become part of it.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10   text-justify text-gray-400 responsive-width">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ipsa
        id numquam voluptatum alias unde, dolores deserunt ab magnam a deleniti
        quisquam? Facere nisi exercitationem corporis debitis amet quam labore
        ratione, fuga nobis doloremque quibusdam molestias magnam. Quae id quia
        officia labore tenetur fugit fuga voluptatem cumque, itaque porro
        quaerat expedita, atque quos omnis qui unde ratione non, sapiente
        commodi officiis. Minus omnis illum quasi totam provident atque debitis
        deserunt ullam beatae repellat. Excepturi consectetur dolorem
        voluptatibus facere a ipsam! Optio a, doloribus sint error quas
        obcaecati? Aliquid totam, sequi dignissimos, perferendis possimus atque
        dolore perspiciatis officia, recusandae tenetur praesentium fugit saepe
        quaerat. Iusto rem iure commodi, eius earum voluptates assumenda quidem
        autem nulla, nam velit odio eligendi! Corporis atque perspiciatis
        recusandae autem maiores vel ipsa eos laudantium, ab, exercitationem
        commodi voluptatem impedit ad doloribus consequatur. Harum dignissimos
        provident voluptates temporibus vel praesentium labore excepturi
        cupiditate asperiores, possimus, sit illo pariatur neque. Eius voluptas,
        cumque beatae non in exercitationem ex recusandae veniam nulla molestiae
        ipsa eligendi tenetur placeat nisi dolorum laboriosam. Ratione nisi
        perspiciatis sequi, vel, tempora, quisquam ea fuga hic itaque repellat
        eligendi atque obcaecati magni et similique facilis accusamus in nostrum
        alias quaerat est magnam vitae. Quidem, ab!
      </section>
    </div>
  )
}

export default AboutUs
