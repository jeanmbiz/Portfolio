import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import {
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
  ContactCard,
  ContactCardImage,
  ContactCardContent,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { userData } from "@/utils/userData";

export const Contacts = () => {
  const ref = useRef(null);

  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  return (
    <ContactSection id="contact">
      <Container>
        <ContactSectionContent ref={ref}>
          <motion.div style={{ scale }}>
            <ContactSectionText>
              <Text type="heading2" color="grey4">
                Let's talk and{" "}
                <Text as="span" type="heading2" color="brand1">
                  develop solutions for your company
                </Text>
                , together!
              </Text>
            </ContactSectionText>
          </motion.div>
          <ContactsCards>
            <ContactCard>
              <Text
                as="a"
                target="_blank"
                href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C+tudo+bem%3F+venho+por+meio+do+seu+portf%C3%B3lio.`}
              >
                <ContactCardImage className="wpp">
                  <FaWhatsapp color="#fff" size={24} />
                </ContactCardImage>
              </Text>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  My Whatsapp
                </Text>
                <Text color="grey2" type="body2">
                  I'm available for a voice chat, let's about creativity
                  together?
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C+tudo+bem%3F+venho+por+meio+do+seu+portf%C3%B3lio.`}
                >
                  Talk Now
                </Text>
              </ContactCardContent>
            </ContactCard>

            <ContactCard>
              <Text
                as="a"
                target="_blank"
                href={`mailto=${userData.emailUser}`}
                onClick={() =>
                  (window.location.href = "mailto:nekelpatrick.com")
                }
              >
                <ContactCardImage className="email">
                  <FaEnvelopeOpen color="#fff" size={24} />
                </ContactCardImage>
              </Text>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  My email
                </Text>
                <Text color="grey2" type="body2">
                  Send me an email reporting feedbacks, suggestions and ideas
                </Text>

                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`mailto=${userData.emailUser}`}
                  onClick={() =>
                    (window.location.href = "mailto:nekelpatrick.com")
                  }
                >
                  Send me an email
                </Text>
              </ContactCardContent>
            </ContactCard>
            <ContactCard>
              <Text as="a" target="_blank" href={linkedInUrl}>
                <ContactCardImage className="linkedin">
                  <FaLinkedin color="#fff" size={24} />
                </ContactCardImage>
              </Text>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  My LinkedIn
                </Text>
                <Text color="grey2" type="body2">
                  We can create more constant interactions as well as a sharing
                  network
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={linkedInUrl}
                >
                  Go to LinkedIn now
                </Text>
              </ContactCardContent>
            </ContactCard>
          </ContactsCards>
        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};
