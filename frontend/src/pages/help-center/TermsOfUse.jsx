import React, { useState } from "react";
import "./Styles.scss";
import { Link } from "react-router-dom";
import arrowImage from "../../assets/images/arrow-right-blue.svg";

export default function TermsOfUse() {
  return (
    <section className="help">
      <div className="help-container">
        <h2 className="title">
          We are here to
          <div>help you</div>
        </h2>
        <nav className="help-nav">
          <ul>
            <li>
              <Link to="/help/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/help/rules">Rules</Link>
            </li>
            <li>
              <Link to="/help/contact-us">Contact Us</Link>
            </li>
            <li className="active">
              <Link to="/help/terms-of-use">Terms of use</Link>
            </li>
            <li>
              <Link to="/help/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </nav>

        <div className="block privacy-policy">
          <h2>Your use of the website if you are under 18</h2>
          <p>
            If you are under 18, you may need your parent/guardian to help you
            with your use of the Website and the App and with reading these
            Terms and Conditions. If anything is hard to understand, please ask
            your parent/guardian to explain. If you still have any questions,
            you or your parent/guardian can contact us at:
            <a href="mailto:info@fantasy_team.com">info@fantasy_team.com</a>.
          </p>
          <p>
            If you are aged 13 or under, you cannot register for a Premier
            League account (&quot;Account&quot;) without the permission of your
            parent/guardian. You need to register if you want to play the
            Fantasy game. You do not need to register to use the Website or App.
          </p>
          <p>
            We may collect your personal information when you use the Website
            and the App. You can find out more about how we use your personal
            information in our Questions and Answers. You can find a link here:
            <a href="link">link</a>.
          </p>

          <h2>Other applicable terms</h2>
          <p>
            These Terms of Use are additional to, and should be read in
            conjunction with, our <a href="PrivacyPolicyLink">Privacy Policy</a>{" "}
            and
            <a href="CookiePolicyLink">Cookie Policy</a>.
          </p>
          <p>
            If you are under 18, we have tried to explain these policies for you
            in our Questions and Answers. You can find a link here:
            <a href="link">link</a>.
          </p>

          <h2>Intellectual property rights</h2>
          <p>
            The Website is protected by copyright, database rights and other
            intellectual property and related rights (&quot;Rights&quot;) which
            are owned by us and our suppliers. All such Rights are reserved.
            Except where otherwise indicated on the Website:
          </p>
          <ul>
            <li>
              You may download and print material from the Website as is
              reasonable for your own private and personal use;
            </li>
            <li>
              You may also forward such material from the Website to other
              people for their private and personal use provided you credit us
              as its source and add the Website address:
              <a href="https://www.fantasyteam.com">www.fantasyteam.com</a>. You
              must draw their attention to these terms which also apply to them;
              and
            </li>
            <li>
              You may provide links to the Website provided they go to the home
              page only and provided you do so in a way that is fair, legal and
              does not damage our reputation or take advantage of it. You must
              not establish a link in such a way as to suggest any form of
              association, approval or endorsement on the part of us where none
              exists.
            </li>
          </ul>
          <p>
            The Website must not be used in any other way, including for
            commercial purposes, and you may not otherwise reproduce, re-utilise
            or redistribute it (including, by way of example, creating a
            database (electronic or otherwise) that includes material downloaded
            or otherwise obtained from the Website), or frame or deep-link to it
            (or to any of its content) on any other website, without our prior
            written approval. If you print off, copy or download any part of the
            Website in breach of these terms, your right to use the Website will
            cease immediately and you must return or destroy any copies of the
            materials you have made at our request.
          </p>
          <p>
            The trade marks, logos and brand names shown on the Website are
            owned by us or our suppliers, partners or member Clubs. No rights
            are granted to use any of them without the prior written permission
            of the owner.
          </p>

          <h2>Account</h2>
          <p>
            You may register for an Account. You are not permitted to register
            multiple Accounts on the Website or App.
          </p>
          <p>
            In registering for an Account, you will be providing personal data
            to the Premier League. Any personal data which you do submit will be
            processed in accordance with the Premier League’s Privacy Policy and
            in accordance with relevant data protection legislation including
            the General Data Protection Regulation (&quot;GDPR&quot;) and the
            Data Protection Act 2018. If you are under 18, you can find out more
            about how we use your personal information in our Questions and
            Answers, which is available here:
            <a href="link">link</a>. We will only share personal data in
            accordance with our Privacy Policy or if required to do so by a
            competent authority or court within the United Kingdom.
          </p>
          <p>
            You may (at your sole discretion) enable two factor authentication
            on your Account. Two factor authentication improves the security of
            users’ accounts. Before enabling two factor authentication, we
            recommend that you read our guide on two factor authentication which
            can be found here:
            <a href="link">link</a>.
          </p>
          <p>You are responsible for:</p>
          <ul>
            <li>
              Ensuring that your equipment is enabled with appropriate
              up-to-date virus checking software;
            </li>
            <li>
              Maintaining the security of your Account and/or password including
              (without limitation) by keeping passwords for your Account secure,
              frequently changing your password and keeping it confidential; and
            </li>
            <li>Implementing two factor authentication on your Account.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
