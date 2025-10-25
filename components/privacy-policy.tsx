"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, FileText, Shield, ShieldCheck, Users } from "lucide-react"
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function PrivacyPolicy() {
  const [lastUpdated] = useState("May 22, 2025")

const handleDownload = async () => {
  const element = document.querySelector(".privacy") as HTMLElement;

  if (!element) {
    return;
  }

  const textBlack = element.className;
  element.className += " bg-white text-black";

  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [canvas.width, canvas.height],
  });

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  pdf.save("Noble Kode Privacy Policy Page.pdf");


  element.className = textBlack;
};



  return (
    <div className="privacy container mx-auto py-10 px-4 max-w-5xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          <Clock className="h-4 w-4" /> Last Updated: {lastUpdated}
        </p>
      </div>

      <div className="text-white mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex text-gray-100 items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-red-500" />
              Our Commitment to Your Privacy
            </CardTitle>
            <CardDescription className="text-gray-300">
              At Noble Kode, we value your privacy and are committed to protecting your personal information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
              our website noblekode.com, including any other media form, media channel, mobile website, or mobile
              application related or connected to Noble Kode (collectively, the "Site").
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
              please do not access the site.
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="collection" className="mb-8">
          <div className="w-full px-2 md:px-0">
  <TabsList className="flex overflow-x-auto md:grid md:grid-cols-4 gap-2">
    <TabsTrigger value="collection" className="flex-shrink-0 whitespace-nowrap min-w-fit px-6">
      Collection
    </TabsTrigger>
    <TabsTrigger value="usage" className="flex-shrink-0 whitespace-nowrap min-w-fit px-6">
      Usage
    </TabsTrigger>
    <TabsTrigger value="sharing" className="flex-shrink-0 whitespace-nowrap min-w-fit px-6">
      Sharing
    </TabsTrigger>
    <TabsTrigger value="rights" className="flex-shrink-0 whitespace-nowrap min-w-fit px-6">
      Rights
    </TabsTrigger>
  </TabsList>
</div>





        <TabsContent value="collection" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex text-gray-100 items-center gap-2">
                <FileText className="h-5 w-5 text-cyan-500" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Personal Data</h3>
                <p>
                  We may collect personal identification information from users in various ways, including, but not
                  limited to, when users visit our site, register on the site, fill out a form, and in connection with
                  other activities, services, features, or resources we make available on our Site. Users may be asked
                  for, as appropriate:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Job title</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Non-Personal Data</h3>
                <p>
                  We may collect non-personal identification information about users whenever they interact with our
                  Site. This may include:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Browser name</li>
                  <li>Type of computer or device</li>
                  <li>Technical information about users' means of connection to our Site</li>
                  <li>Operating system</li>
                  <li>Internet service providers</li>
                  <li>Other similar information</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Cookies and Tracking Technologies</h3>
                <p>
                  Our Site may use "cookies" to enhance user experience. Users' web browsers place cookies on their hard
                  drive for record-keeping purposes and sometimes to track information about them. Users may choose to
                  set their web browser to refuse cookies or to alert you when cookies are being sent. If they do so,
                  note that some parts of the Site may not function properly.
                </p>
                <p className="mt-2">
                  We use cookies, pixels, and other technologies (collectively "cookies") to recognize your browser or
                  device, learn more about your interests, provide you with essential features and services, and for
                  additional purposes including:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Recognizing you when you sign in to use our services</li>
                  <li>Keeping track of your specified preferences</li>
                  <li>Conducting research and diagnostics to improve our content, products, and services</li>
                  <li>Preventing fraudulent activity</li>
                  <li>Improving security</li>
                  <li>Delivering content, including ads, relevant to your interests</li>
                  <li>Reporting, which allows us to measure and analyze the performance of our services</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Meta Pixel</h3>
                <p>
                  Our website uses Meta Pixel, a web analytics and advertising service provided by Meta Platforms, Inc.
                  Meta Pixel uses cookies to help us analyze how users use our site and to enhance our ability to serve
                  targeted advertisements to people who may be interested in our services. The information generated by
                  the Meta Pixel about your use of our website (including your IP address) will be transmitted to and
                  stored by Meta on servers in the United States.
                </p>
                <p className="mt-2">
                  Meta Pixel helps us understand the effectiveness of our advertising campaigns on Meta platforms
                  (Facebook and Instagram) and allows us to retarget users who have already visited our website. This
                  means that we may show our ads to you on Meta platforms after you have visited our website.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="usage" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex text-gray-100 items-center gap-2">
                <Users className="h-5 w-5 text-cyan-500" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Noble Kode may collect and use users' personal information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">To improve customer service</span> - Information you provide helps us
                  respond to your customer service requests and support needs more efficiently.
                </li>
                <li>
                  <span className="font-medium">To personalize user experience</span> - We may use information in the
                  aggregate to understand how our users as a group use the services and resources provided on our Site.
                </li>
                <li>
                  <span className="font-medium">To improve our Site</span> - We may use feedback you provide to improve
                  our products and services.
                </li>
                <li>
                  <span className="font-medium">To process payments</span> - We may use the information users provide
                  about themselves when placing an order only to provide service to that order. We do not share this
                  information with outside parties except to the extent necessary to provide the service.
                </li>
                <li>
                  <span className="font-medium">To run a promotion, contest, survey or other Site feature</span> - To
                  send users information they agreed to receive about topics we think will be of interest to them.
                </li>
                <li>
                  <span className="font-medium">To send periodic emails</span> - We may use the email address to send
                  user information and updates pertaining to their order. It may also be used to respond to their
                  inquiries, questions, and/or other requests. If the user decides to opt-in to our mailing list, they
                  will receive emails that may include company news, updates, related product or service information,
                  etc. If at any time the user would like to unsubscribe from receiving future emails, we include
                  detailed unsubscribe instructions at the bottom of each email.
                </li>
                <li>
                  <span className="font-medium">For advertising and marketing</span> - We may use your information to
                  deliver advertisements and marketing communications to you about our services that may be relevant to
                  your interests. This includes using your data for Meta Business advertising purposes.
                </li>
              </ul>

              <div>
                <h3 className="font-medium mb-2">Legal Basis for Processing (For EEA Users)</h3>
                <p>
                  If you are an individual in the European Economic Area (EEA), we collect and process information about
                  you only where we have legal bases for doing so under applicable EU laws. The legal bases depend on
                  the services you use and how you use them. This means we collect and use your information only where:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    We need it to provide you services, including to operate the services, provide customer support,
                    personalized features, and to protect the safety and security of the services;
                  </li>
                  <li>
                    It satisfies a legitimate interest (which is not overridden by your data protection interests), such
                    as for research and development, to market and promote the services, and to protect our legal rights
                    and interests;
                  </li>
                  <li>You give us consent to do so for a specific purpose; or</li>
                  <li>We need to process your data to comply with a legal obligation.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sharing" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex text-gray-100 items-center gap-2">
                <Shield className="h-5 w-5 text-cyan-500" />
                How We Share Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We do not sell, trade, or rent users' personal identification information to others. We may share
                generic aggregated demographic information not linked to any personal identification information
                regarding visitors and users with our business partners, trusted affiliates, and advertisers for the
                purposes outlined above.
              </p>

              <div>
                <h3 className="font-medium mb-2">Third-Party Service Providers</h3>
                <p>
                  We may use third-party service providers to help us operate our business and the Site or administer
                  activities on our behalf, such as sending out newsletters or surveys. We may share your information
                  with these third parties for those limited purposes provided that you have given us your permission.
                </p>
                <p className="mt-2">These third-party service providers include:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <span className="font-medium">Meta Platforms, Inc.</span> - We share information with Meta through
                    the Meta Pixel for advertising and analytics purposes.
                  </li>
                  <li>
                    <span className="font-medium">Google Analytics</span> - We use Google Analytics to help us
                    understand how our customers use the Site.
                  </li>
                  <li>
                    <span className="font-medium">Payment processors</span> - We use third-party payment processors to
                    handle financial transactions on our Site. These processors have their own privacy policies that
                    govern how they use your personal information.
                  </li>
                  <li>
                    <span className="font-medium">Email marketing services</span> - We may use third-party email
                    marketing services to send newsletters and promotional emails.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Legal Requirements</h3>
                <p>
                  We may disclose your information if required to do so by law or in the good-faith belief that such
                  action is necessary to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Comply with a legal obligation</li>
                  <li>Protect and defend the rights or property of Noble Kode</li>
                  <li>Prevent or investigate possible wrongdoing in connection with the Site</li>
                  <li>Protect the personal safety of users of the Site or the public</li>
                  <li>Protect against legal liability</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Business Transfers</h3>
                <p>
                  If Noble Kode is involved in a merger, acquisition, or sale of all or a portion of its assets, you will
                  be notified via email and/or a prominent notice on our Site of any change in ownership or uses of your
                  personal information, as well as any choices you may have regarding your personal information.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rights" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex text-gray-100 items-center gap-2">
                <Users className="h-5 w-5 text-cyan-500" />
                Your Rights and Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Access, Correction, and Deletion</h3>
                <p>
                  You have the right to access, correct, or delete your personal information that we collect and
                  maintain. To request access to, correction, or deletion of your personal information, please contact
                  us at privacy@noblekode.com. We will respond to your request within a reasonable timeframe.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Data Retention</h3>
                <p>
                  We will retain your personal information only for as long as is necessary for the purposes set out in
                  this Privacy Policy. We will retain and use your information to the extent necessary to comply with
                  our legal obligations, resolve disputes, and enforce our policies.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Opt-Out Rights</h3>
                <p>
                  You can stop receiving promotional emails from us by following the unsubscribe instructions included
                  in every email we send.
                </p>
                <p className="mt-2">
                  You can opt-out of Meta Pixel tracking by using browser add-ons or extensions specifically designed to
                  block tracking scripts. You can also visit Meta's Ad Preferences to learn more about the information
                  Meta collects and control how it's used.
                </p>
                <p className="mt-2">
                  Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set
                  your browser to remove or reject browser cookies. Please note that if you choose to remove or reject
                  cookies, this could affect the availability and functionality of our Site.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Do Not Track Signals</h3>
                <p>
                  Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have
                  your online activities tracked. At this time, we do not respond to browser "Do Not Track" signals, but
                  we do provide you the option to opt out of interest-based advertising as described above.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Children's Privacy</h3>
                <p>
                  Our Site is not intended for children under the age of 13. We do not knowingly collect personal
                  information from children under 13. If you are a parent or guardian and you are aware that your child
                  has provided us with personal information, please contact us so that we can take necessary actions.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Your California Privacy Rights</h3>
                <p>
                  California Civil Code Section 1798.83 permits users of our Site that are California residents to
                  request certain information regarding our disclosure of personal information to third parties for
                  their direct marketing purposes. To make such a request, please send an email to
                  privacy@noblekode.com.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Your European Privacy Rights</h3>
                <p>
                  If you are located in the European Economic Area (EEA), you have certain rights under the General Data
                  Protection Regulation (GDPR), including:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>The right to access your personal data</li>
                  <li>The right to rectify inaccurate personal data</li>
                  <li>The right to erasure of your personal data</li>
                  <li>The right to restrict processing of your personal data</li>
                  <li>The right to data portability</li>
                  <li>The right to object to the processing of your personal data</li>
                </ul>
                <p className="mt-2">
                  To exercise these rights, please contact us at privacy@noblekode.com. We will respond to your request
                  within 30 days.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-100">International Data Transfers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Your information, including personal data, may be transferred to and maintained on computers located
              outside of your state, province, country, or other governmental jurisdiction where the data protection
              laws may differ from those of your jurisdiction.
            </p>
            <p className="mt-2">
              If you are located outside the United States and choose to provide information to us, please note that we
              transfer the data, including personal data, to the United States and process it there. Your consent to
              this Privacy Policy followed by your submission of such information represents your agreement to that
              transfer.
            </p>
            <p className="mt-2">
              Noble Kode will take all the steps reasonably necessary to ensure that your data is treated securely and in
              accordance with this Privacy Policy and no transfer of your personal data will take place to an
              organization or a country unless there are adequate controls in place including the security of your data
              and other personal information.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-gray-100">Security of Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We adopt appropriate data collection, storage, and processing practices and security measures to protect
              against unauthorized access, alteration, disclosure, or destruction of your personal information,
              username, password, transaction information, and data stored on our Site.
            </p>
            <p className="mt-2">
              However, please be aware that no method of transmission over the Internet or method of electronic storage
              is 100% secure. While we strive to use commercially acceptable means to protect your personal information,
              we cannot guarantee its absolute security.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-gray-100">Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Noble Kode has the discretion to update this privacy policy at any time. When we do, we will revise the
              updated date at the top of this page. We encourage users to frequently check this page for any changes to
              stay informed about how we are helping to protect the personal information we collect.
            </p>
            <p className="mt-2">
              You acknowledge and agree that it is your responsibility to review this privacy policy periodically and
              become aware of modifications.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-gray-100">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with
              this site, please contact us at:
            </p>
            <div className="mt-4">
              <p className="font-medium">Noble Kode</p>
              <a href="mailto:contact@noblekode.com">
              <p>Email: contact@noblekode.com</p>
              </a>
              <a href="tel:+919717434098">
              <p>Contact: +91-9717434098</p>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
