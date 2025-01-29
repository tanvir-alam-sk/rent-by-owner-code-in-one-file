import Image from "next/image";
import BrowseImg from "@/assets/browse_img.svg";
import Book from "@/assets/book.svg";
import Go from "@/assets/go.svg";
import Arrow from "@/assets/arrow.svg";
import HelpImage from "@/assets/wherever_you_go.svg";
import IconWherever from "@/assets/icon_wherever.svg";
import Safety from "@/assets/safety.svg";
import ClipboardReport from "@/assets/clipboard_report.svg";
import customerService from "@/assets/customer_service.svg";
import StatusIcon from "@/assets/about_note_shape.svg";
import BusinessDevelopment from "@/assets/business_development.svg";
import BrowseIcon from "@/assets/icon_browser.svg";
import "./style.css";

export default function Home() {
  return (
    <div>
      <div className="pres-ab-banner">
        <div className="pres-ab-container">
          <div className="pres-ab-row">
            <div className="pres-ab-banner-content">
              <div className="pres-ab-breadcrumb">
                <a
                  className="pres-ab-no-underline"
                  href="https://www.rentbyowner.com/"
                >
                  Home
                </a>
                <span> &gt; </span>
                <a className="pres-ab-link" href="#">
                  About Us
                </a>
              </div>
              <div className="pres-ab-content">
                <h1 className="pres-ab-page-heading">About Rent By Owner</h1>
                <h2 className="pres-ab-page-heading-h2">
                  Rent By Owner makes it easy to discover and compare the best
                  vacation rentals and RBO homes to help find the best prices on
                  properties direct from owners and major OTAs.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pres-ab-container">
        <div className="pres-ab-container-fluid">
          <div className="pres-ab-vacation-section">
            <div className="pres-ab-static-page pres-ab-text-center pres-ab-common-container">
              <h2>
                For Travelers. By Owners. Let us help find your next vacation
                rental and RBO home
              </h2>
              <h4 className="pres-ab-static-page-subtitle">
                Rent By Owner has been helping to connect travelers with their
                perfect place to stay since 2013. Since then, we have connected
                millions of travelers around the world to hundreds of thousands
                of properties. How can we help you?
              </h4>
            </div>
          </div>
        </div>

        <section className="pres-ab-about-steps">
          <div className="pres-ab-common-container">
            <div className="pres-ab-card">
              <div className="pres-ab-about-step">
                <Image src={BrowseImg} alt="" width={222} height={226} />
                <h4 className="pres-ab-about-title">Find a Vacation Rental</h4>
                <p className="pres-ab-about-subtitle">
                  Millions of places to stay from 154,000+ destinations.
                </p>
              </div>
            </div>
            <div className="pres-ab-arrow">
              <Image
                className="pres-ab-arrowIcon"
                src={Arrow}
                alt=""
                width={83}
                height={55}
              />
            </div>
            <div className="pres-ab-card">
              <div className="pres-ab-about-step pres-ab-book-card">
                <Image src={Book} alt="" width={222} height={226} />
                <h4 className="pres-ab-about-title">Find a Vacation Rental</h4>
                <p className="pres-ab-about-subtitle">
                  Our primary goal is to improve the efficiency of the booking
                  journey.
                </p>
              </div>
            </div>
            <div className="pres-ab-arrow">
              <Image
                className="pres-ab-arrowIcon"
                src={Arrow}
                alt=""
                width={83}
                height={55}
              />
            </div>
            <div className="pres-ab-card">
              <div className="pres-ab-about-step">
                <Image src={Go} alt="" width={222} height={226} />
                <h4 className="pres-ab-about-title">Ready, Set, Go!</h4>
                <p className="pres-ab-about-subtitle">
                  Create a new travel memory with family and friends.
                </p>
              </div>
            </div>
          </div>
          <div className="pres-ab-Vacation-btn">
            <button>Find a Vacation Home</button>
          </div>
        </section>
      </div>
      <hr></hr>
      <div className="pres-ab-container">
        <div className="pres-ab-here-to-help">
          <div className="pres-ab-helping-left">
            <Image src={HelpImage} alt="we are here to help" />
          </div>
          <div className="pres-ab-helping-right">
            <Image
              src={IconWherever}
              width={49}
              height={49}
              alt="here to help"
            />
            <h2 className="pres-ab-help-heading">Why Use Rent By Owner?</h2>
            <div className="pres-ab-here-to-help-block pres-ab-help-block">
              <Image src={Safety} width={62} height={62} alt="safety hand" />
              <div>
                <h4 className="pres-ab-here-to-help-title">
                  Find a Safe Place to Stay
                </h4>
                <p className="pres-ab-here-to-help-subtitle">
                  Rent By Owner lists millions of properties with enhanced
                  health and safety protocols. Book with comfort.
                </p>
              </div>
            </div>
            <div className="pres-ab-here-to-help-block pres-ab-help-block">
              <Image
                src={ClipboardReport}
                width={62}
                height={62}
                alt="safety hand"
              />
              <div>
                <h4 className="pres-ab-here-to-help-title">
                  Trusted Partners & Owners
                </h4>
                <p className="pres-ab-here-to-help-subtitle">
                  Rent By Owner has partnered with leading OTAs and Property
                  Managers who have thoroughly checked each place to stay.
                </p>
              </div>
            </div>
            <div className="pres-ab-here-to-help-block pres-ab-help-block">
              <Image
                src={customerService}
                width={62}
                height={62}
                alt="safety hand"
              />
              <div>
                <h4 className="pres-ab-here-to-help-title">
                  Great Prices & Deals
                </h4>
                <p className="pres-ab-here-to-help-subtitle">
                  Rent a whole home or vacation rental and save money on your
                  holiday. We compare rates across partners to help you find the
                  best deal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pres-ab-status-section">
        <p className="pres-ab-status">
          Since 2013, we have helped millions of travelers find the
          <span className="pres-ab-color-accent"> perfect place to stay</span>.
          Let us help you find a vacation rental, save money, and create a
          memory that lasts a lifetime.
        </p>
        <Image
          className="pres-ab-statusIcon"
          src={StatusIcon}
          alt="icon"
          width={92}
          height={84}
        />
      </section>

      <div className="pres-ab-container">
        <div className="pres-ab-family-section">
          <div className="pres-ab-family-section-left">
            <Image
              src={BrowseIcon}
              className="pres-ab-browse-img"
              alt="browse img"
              width={49}
              height={49}
            />
            <h2>We&lsquo;re Part of a Large Family</h2>
            <p>
              Rent By Owner is part of the{" "}
              <a
                href="https://www.upnextgroup.com/"
                className="pres-ab-upnext-link"
                target="_blank"
              >
                UpNext Group
              </a>{" "}
              family of websites, and yes, we’re owners too. UpNext Group
              harnesses data-driven intent to match travelers to the right
              property at the right time. In addition to our mission to create
              lasting travel memories, we help online travel sellers maximize
              their yield, ensuring more properties are booked every single
              night.
            </p>
            <p>
              With a network of websites, travelers rely on us to help find the
              perfect place to stay, easily comparing rentals, condos, hotels,
              RVs, boats, activities, and resorts across an ever-growing network
              of niche travel brands.
            </p>
            <div className="pres-ab-family-btn">
              <button>Connect with UpNext Group</button>
            </div>
          </div>
          <div className="pres-ab-family-section-right">
            <Image
              src={BusinessDevelopment}
              alt="business development image"
              width={523}
              height={367}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
