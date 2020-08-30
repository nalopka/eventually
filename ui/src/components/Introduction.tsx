import React, { FC } from 'react';
import cn from 'classnames';

import cs from 'common/styles/common.css';
import s from './Introduction.css';

interface Props {
}

const Introduction: FC<Props> = () => {
    return (
        <div
            className={s.introduction}
        >
            <header>
                <p className={s.title}>Eventually</p>
                <p className={s.link}>Sign in</p>
            </header>
            <div className={s.intro}>
                <h1>
                    Organizing
                    a&nbsp;successful event just got a lot easier
                </h1>
                <p className={s.primaryText}>
                    Now you can attract wide auditory no matter where they are, and what device do they use.
                    We invite you to give Eventually a try to help you organize your next event, whatever
                    it ought to be: conference, meetup, concert, or training.
                </p>
                <button className={cs.primaryButton}>Try Eventually</button>
            </div>
            <div className={cn(s.features, s.withLine)}>
                <h2 className={s.blockTitle}>How it works</h2>
                <ol className={s.featuresList}>
                    <li className={s.featuresItem}>
                        <h4>Create an event</h4>
                        <p>
                            It takes just a few minutes to create event using Eventually.
                            Add title, description, ticket types and you are ready to go!
                        </p>
                    </li>
                    <li className={s.featuresItem}>
                        <h4>Send invites</h4>
                        <p>
                            Post a link to event in your social media, or create email campaign.
                            It doesn't matter what services or devices your guests prefer to use.
                        </p>
                    </li>
                    <li className={s.featuresItem}>
                        <h4>Track attendees</h4>
                        <p>
                            Guests can register in just a few clicks by providing their email.
                            Promote your event in any way you like, and see how people are gathering.
                        </p>
                    </li>
                </ol>
            </div>

            <div className={s.organization}>
                <div className={s.organizationPicture}>
                    <div className={s.picture}>

                    </div>
                    <div className={s.organizationLink}>
                        <p className={s.linkText}>This is how Eventually UI looks like.</p>
                        <p className={s.link}>Try it in action →</p>

                    </div>
                </div>
                <div className={cn(s.organizationAbout, s.withLine)}>
                    <h2 className={s.blockTitle}>Organization, reorganized</h2>
                    <div className={s.explanation}>
                        <p className={s.text}>
                            We've built Eventually from scratch, with new ways to easily create, organize, and keep track of events.
                        </p>
                    </div>
                    <div className={s.explanation}>
                        <p className={s.title}>
                            Keeping finger on the pulse
                        </p>
                        <p className={s.text}>
                            We're committed to creating best tool for event organization.
                            That's why we work closely with you to understand the unique challenges of your business area and
                            add the most needed features and services for achieving your goals.
                        </p>
                    </div>
                    <div className={s.explanation}>
                        <p className={s.title}>
                            Designed to make life easier, not harder
                        </p>
                        <p className={s.text}>
                            Until now, managing guest lists for event was time-consuming and cumbersome.
                            Tools like Eventually help to reach those who interested and bring them together.
                            Eventually speeds up event creation process, so you can start receiving first RSVPs in less than an hour.
                            You can even pick up where you left editing your event.
                        </p>
                    </div>
                </div>
            </div>

            <div className={s.ticketCustomization}>
                <h2 className={s.blockTitle}>Advanced ticket customization</h2>
                <div className={s.explanation}>
                    <p className={s.text}>
                        Ticket types let you choose several ticket prices for your event, and set their availability and amount.
                        You can track and analyze registrations for each type, adjust prices, and even close registration earlier.
                    </p>
                </div>
                <div className={s.explanation}>
                    <p className={s.title}>Ticket types</p>
                    <p className={s.text}>
                        Ticket types let you choose several ticket prices for your event, and set their availability and amount.
                        You can track and analyze registrations for each type, adjust prices, and even close registration earlier.
                    </p>
                </div>

                <div className={s.withIconBlock}>
                    <div className={cn(s.explanation, s.withIcon)}>
                        <p className={s.title}>Easy event registration</p>
                        <p className={s.text}>
                            Guest can register to your event in a couple of clicks (or taps, if they use mobile version).
                        </p>
                    </div>
                    <div className={cn(s.explanation, s.withIcon)}>
                        <p className={s.title}>Private links</p>
                        <p className={s.text}>
                            Need to invite special guests via secret link? You can create a private ticket type, and send a link to it to every VIP.
                        </p>
                    </div>
                </div>
            </div>

            {/*67x62*/}
            <div className={cn(s.pricing, s.withLine)}>
                <h2 className={s.blockTitle}>Pricing</h2>
                <div className={s.pricingItems}>
                    <div className={s.explanation}>
                        <p className={s.text}>
                            We design payment plans that makes sense for your budget cycle and offer ongoing support for startups.
                            Eventually has a flexible pricing. Fill in the form below,
                            we contact you and tell you how much it'll cost for ya!
                        </p>
                    </div>
                    <div className={s.explanation}>
                        <p className={s.title}>Privacy and security</p>
                        <p className={s.text}>
                            Any data collected through the Eventually will be encrypted and stored securely.
                            Eventually will not have access to any contact information or other identifying data your guests will provide.
                        </p>
                    </div>

                    <div className={s.explanation}>
                        <p className={s.title}>Stable and safe</p>
                        <p className={s.text}>
                            Eventually auto-saves your changes. Nothing will be lost.
                            But don't worry—editing published event will not change it, until you press Publish button.
                        </p>
                    </div>
                </div>

                <button className={cs.primaryButton}>Get early access</button>
            </div>

            <footer className={s.footer}>
                <p className={s.text}>Eventually</p>
            </footer>
        </div>
    );
};

export default Introduction;
