import { Link } from "react-scroll";
import { Phone, Mail } from "lucide-react";
import links from "../../content/links";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import infos from "../../content/infos.jsx";
import content from "../../content/content";
import IconButton from "../interactives/IconButton";
import imgAppStore from "../../assets/imgs/hero/appStore.png";
import imgGooglePlay from "../../assets/imgs/hero/googlePlay.png";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

function FooterSocial() {
  return (
    <footer className="bg-bgSectionDark full gap-y-[42px] text-white font-secondFont text-left text-paragraph4  flex flex-col py-[26px] phone3:py-[48px] justify-between items-center bg-cover bg-center bg-no-repeat">
      <div className=" w-[90%] max-w-[1215px] flex flex-col gap-y-[80px]  desktop1:flex-row desktop1:justify-between">
        <div className="flex flex-col gap-y-[16px] desktop1:w-[290px] text-paragraph3">
          <MotionDivDownToUp>
            <div className="h-[115px] flex justify-start items-center">
              <img
                src={content.texts.navbar.logo.img}
                alt={content.texts.navbar.logo.alt}
                className="max-h-[88px] w-auto"
                // className="w-[60%] tablet1:w-[50%] desktop1:w-[80%]"
              ></img>
            </div>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <div className="flex full gap-x-[12px] items-center opacity-90">
              <svg
                aria-label="ícone do Whatsapp"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              <a
                href={whatsappContactLink}
                target="_blank"
                className="hover:underline"
              >
                {infos.phone}
              </a>
            </div>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <div className="flex full gap-x-[12px] items-center opacity-90">
              <svg
                aria-label="ícone do e-mail"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <p className="text-paragraph2">{infos.mail}</p>
            </div>
          </MotionDivDownToUp>
          {/* <MotionDivDownToUp>
            <div className="flex full gap-x-[12px] items-center opacity-90">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-map-pin"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p>{infos.footerInfos.endereco}</p>
            </div>
          </MotionDivDownToUp> */}

          {/* EXPEDIENTE */}
          <MotionDivDownToUp>
            <div className="flex full gap-x-[12px] items-center opacity-90">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-calendar-check-2"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                  <path d="M3 10h18" />
                  <path d="m16 20 2 2 4-4" />
                </svg>
              </div>
              <p>{infos.footerInfos.expediente}</p>
            </div>
          </MotionDivDownToUp>

          {/* Msg de observação */}

          {/* <MotionDivDownToUp>
            {" "}
            <div className="flex full gap-x-[12px] items-center opacity-90">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-clock"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>

              <p>{infos.footerInfos.obs}</p>
            </div>
          </MotionDivDownToUp> */}
        </div>
        <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
          <MotionDivDownToUp>
            <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
              {infos.footerInfos.midSectionName}
            </h1>
          </MotionDivDownToUp>
          {/* Texto footer */}
          <MotionDivDownToUp>
            <p className="opacity-90">{infos.footerInfos.footerText}</p>
          </MotionDivDownToUp>
          {/* Botões de download */}
          {/* <p className="opacity-90">Baixe nosso app:</p>
          <div className="invert">
            {" "}
            <div className="flex flex-col items-start gap-[10px]">
              <a
                href="#"
                target="_blank"
                className="transition hover:scale-110"
              >
                <img
                  src={imgAppStore}
                  alt="Botão para a App Store"
                  className=""
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="transition hover:scale-110"
              >
                <img
                  src={imgGooglePlay}
                  alt="Botão para a Google Play"
                  className=""
                />
              </a>
            </div>
          </div> */}

          {/* Ícones redes sociais */}
          <MotionDivDownToUp>
            <p className="opacity-90">{infos.footerInfos.footerSocialText}</p>
            <div className="mt-2 opacity-90">
              {" "}
              <div className="flex gap-[10px] items-center">
                <a
                  href={links.socialMedia.instagram}
                  target="_blank"
                  aria-label="Link para o Instagram"
                >
                  <IconButton
                    ariaLabel="Botão para o Instagram"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill=""
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-instagram"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    }
                  />
                </a>
                {/* <a
                href={links.socialMedia.facebook}
                target="_blank"
                aria-label="Link para o Facebook"
              >
                <IconButton
                  ariaLabel="Botão para o Facebook"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill=""
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  }
                />
              </a> */}
                {/* <a href={links.socialMedia.linkedin} target="_blank">
                  <IconButton
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    }
                  />
                </a> */}
              </div>
            </div>
          </MotionDivDownToUp>
        </div>
        <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
          <MotionDivDownToUp>
            <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
              {infos.footerInfos.footerNavegacaoText}
            </h1>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <div className="flex justify-between full opacity-90">
              <div className="w-[46%] flex flex-col gap-y-[16px]">
                <div className="h-[36px] hover:underline">
                  <Link
                    to="home"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    href="#"
                  >
                    <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                      {content.texts.navbar.menuItems[0]}
                    </span>
                  </Link>
                </div>
                <div className="h-[36px] hover:underline">
                  <Link
                    to="about"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    href="#"
                  >
                    <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                      {content.texts.navbar.menuItems[2]}
                    </span>
                  </Link>
                </div>
              </div>
              <div className=" w-[46%] flex flex-col gap-y-[16px]">
                <div className="h-[36px] hover:underline">
                  <Link
                    to="service"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-20}
                    href="#"
                  >
                    <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                      {content.texts.navbar.menuItems[1]}
                    </span>
                  </Link>
                </div>
                <div className="h-[36px] hover:underline">
                  <Link
                    to="faq"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    href="#"
                  >
                    <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                      {content.texts.navbar.menuItems[3]}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </MotionDivDownToUp>
        </div>
      </div>

      <div className="hidden w-[88%] max-w-[1110px] h-px bg-secondary"></div>

      <div className="text-center w-[88%] max-w-[1110px] flex flex-col mb-[48px] phone2:mb-[80px] tablet1:mb-0">
        <p className="w-full opacity-75">
          {`${infos.footerInfos.year} - ${infos.name} - Todos os direitos reservados`}
        </p>
        <p>
          <a
            className="transition hover:underline"
            target="_blank"
            href="https://www.paperstreet.com.br"
          >
            {" "}
            {infos.footerInfos.footerDivulgacaoText}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default FooterSocial;
