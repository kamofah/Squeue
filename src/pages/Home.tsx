import Navbar from "../components/Navbar/Navbar";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import Button from "../components/Button/Button";
import { ReactQRCode } from "@lglab/react-qr-code";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import styles from "./Home.module.css";
import { HugeiconsIcon } from "@hugeicons/react";
import { type CardDetails, CardDetailsList } from "../../CardDetails";

/* SMALL COMPONENTS */
const Separator = () => {
  return <div className={styles.separator} />;
};

const TypeCard = ({ icon, title, description }: CardDetails) => {
  return (
    <div className={styles.typeCard}>
      <div className={styles.typeCardContent}>
        <div className={styles.typeCardIcon}>
          <HugeiconsIcon icon={icon} color="#7C4DFF" strokeWidth={2} />
        </div>
        <p className="text-label" style={{ textTransform: "none" }}>
          {title}
        </p>
        <p className={`text-body ${styles.typeCardDescription}`}>
          {description}
        </p>
      </div>
      <div className={styles.typeCardArrow}>
        <HugeiconsIcon icon={ArrowRight02Icon} size={20} strokeWidth={2} />
      </div>
    </div>
  );
};

/* SECTION LAYOUTS */
const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className="text-eyebrow">scannable queue platform</p>
        <p className="text-display">
          <span className="underline-highlight">Queue</span> management, made
          simple
        </p>
        <p className="text-body">
          Handle all your queue needs in one place. Create a squeue, share the
          QR code, and anyone can join.
        </p>
      </div>
      <Button
        label="Create a Squeue"
        icon={ArrowRight02Icon}
        variant="primary"
      />
    </section>
  );
};

const DemoSection = () => {
  return (
    <section className={styles.demo}>
      <div className={styles.demoContent}>
        <p className="text-eyebrow">Try it yourself</p>
        <p className="text-heading">How do you pronounce Squeue?</p>
        <p className="text-body">
          Scan the QR code below to cast your vote and see the results update
          live.
        </p>
      </div>
      <div className={styles.qrCodeContainer}>
        <div className={styles.qrCode}>
          <ReactQRCode
            size={200}
            marginSize={0}
            value="https://www.google.com"
            dataModulesSettings={{
              style: "vertical-line",
              lineWidth: 0.7,
            }}
            finderPatternInnerSettings={{ style: "rounded-sm" }}
            finderPatternOuterSettings={{ style: "rounded-sm" }}
          />
        </div>
        <p className={`${styles.demoCaption} text-eyebrow`}>Scan to vote</p>
      </div>
      <div className={styles.liveResults}>
        <div className={styles.liveResultsHeader}>
          <Separator />
          <p
            className={`${styles.demoCaption} text-eyebrow`}
            style={{ letterSpacing: "-0.35px" }}
          >
            Live Results
          </p>
          <Separator />
        </div>
        <div className={styles.liveResultsContainer}>
          <div className={styles.liveResultsBarContainer}>
            <ProgressBar label="S-queue" percentage={63} />
            <ProgressBar label="Skew" percentage={37} />
          </div>
          <p className={`${styles.votingCount} text-eyebrow`}>
            247 people have voted
          </p>
          <Button
            label="Can't scan? Join the poll"
            icon={ArrowRight02Icon}
            variant="minimal"
          />
        </div>
      </div>
    </section>
  );
};

const QueueTypesSection = () => {
  return (
    <section className={styles.types}>
      <div className={styles.typesContent}>
        <p className="text-eyebrow" style={{ textAlign: "right" }}>
          One Squeue
        </p>
        <p className="text-heading" style={{ textAlign: "right" }}>
          Different ways to use it
        </p>
        <p className="text-body" style={{ textAlign: "right", width: "100%" }}>
          From polls to raffles, Squeue gives you the tools to organize any kind
          of participation.
        </p>
      </div>
      <div className={styles.typesGrid}>
        {CardDetailsList.map((cardDetails: CardDetails) => (
          <TypeCard key={cardDetails.title} {...cardDetails} />
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <QueueTypesSection />
      <DemoSection />
    </>
  );
};

export default Home;
