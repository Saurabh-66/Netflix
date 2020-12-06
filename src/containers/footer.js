import React from 'react';
import { Footer } from '../components';
import * as ROUTES from '../constants/routes';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Call 000-800-040-1843</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="https://help.netflix.com/en/node/412">FAQ</Footer.Link>
          <Footer.Link href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</Footer.Link>
          <Footer.Link href="https://help.netflix.com/legal/privacy">Privacy</Footer.Link>
          <Footer.Link href="https://fast.com/">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://help.netflix.com/en/">Help Centre</Footer.Link>
          <Footer.Link href="https://jobs.netflix.com/">Jobs</Footer.Link>
          <Footer.Link href="https://help.netflix.com/legal/privacy#cookies">Cookie Preferences</Footer.Link>
          <Footer.Link href="https://help.netflix.com/legal/notices">Legal Notices</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href={ROUTES.SIGN_IN}>Account</Footer.Link>
          <Footer.Link href="https://devices.netflix.com/en/">Ways to Watch</Footer.Link>
          <Footer.Link href="https://help.netflix.com/legal/corpinfo">Corporate Information</Footer.Link>
          <Footer.Link href={ROUTES.BROWSE}>Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://media.netflix.com/en/">Media Centre</Footer.Link>
          <Footer.Link href="https://help.netflix.com/legal/termsofuse">Terms of Use</Footer.Link>
          <Footer.Link href="https://help.netflix.com/en/contactus">Contact Us</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <br/>
      <Footer.Text>Netflix India</Footer.Text>
    </Footer>
  );
}
