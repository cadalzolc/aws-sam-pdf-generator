import * as handlebars from "handlebars";

const html: string = `
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<style>
		.center {
			text-align: center;
		}

		.indent {
			text-indent: 50px;
		}
	</style>
</head>

<body>
	<div style="padding: 96px;">
		<h3 class="center indent">VSURGIC SOFTWARE ACCESS AGREEMENT </h3>
		<p class="indent">
			This ACCESS AGREEMENT (this “Agreement”), effective as of the date signed below (the “Effective Date”),
			is entered into between RRC Washington, Inc., a Delaware corporation (“Provider”), and the User name
			listed below (“User”). Provider and User may be referred to herein collectively as the “Parties” or
			individually as a “Party.”
		</p>
		<p class="indent">
			WHEREAS, Provider has installed, or will install, the VSURGIC System in various operating rooms of its
			Customers;
		</p>
		<p class="indent">
			WHEREAS, User desires to access the VSURGIC System to allow User to remotely access the operating room
			environments; and
		</p>
		<p class="indent">
			WHEREAS, Provider desires to provide User access to the VSURGIC System, subject to the terms and
			conditions of this Agreement.
		</p>
		<p class="indent">
			NOW, THEREFORE, in consideration of the mutual covenants, terms, and conditions set forth herein, and
			for other good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged,
			the Parties agree as follows:
		</p>
		<p class="indent">
			1. Definitions.
		</p>
		<p class="indent">
			(a) “Customer(s)” means a customer of Provider, and such customer is generally a hospital or an
			ambulatory surgery center.
		</p>
		<p class="indent">
			(b) “Documentation” means Provider’s user manuals, handbooks, and guides relating to the VSURGIC System
			provided by Provider to User either electronically or in hard copy form.
		</p>
		<p class="indent">
			(c) “Provider IP” means the VSURGIC System, the Documentation, and any and all intellectual property
			provided to User or any Customer in connection with the foregoing. For the avoidance of doubt, Provider
			IP includes any information, data, or other content derived from Provider’s monitoring of User’s access
			to or use of the VSURGIC System.
		</p>
		<p class="indent">
			(d) “VSURGIC System” means: (i) the software provided by Provider to User as software-as-a-service,
			which allows User to remotely access operating room environments, (ii) the software provided by Provider
			to a Customer as software-as-a-service, which allows the Customer to grant access to an operating room
			environment, and (iii) the hardware provided to a Customer enabling the User’s access to an operating
			room environment.
		</p>
		<p class="indent">
			2. Access and Use.
		</p>
		<p class="indent">
			(a) Provision of Access. Subject to and conditioned on User’s payment of Fees and compliance with all
			other terms and conditions of this Agreement, Provider hereby grants User a non-exclusive,
			non-transferable (except in compliance with Section 12(g)) right to access and use the VSURGIC System
			during the Term, solely for use in connection with User’s remote access to the operating room
			environments in accordance with the terms and conditions imposed by the applicable Customer. Provider
			shall provide to User the necessary passwords and network links or connections to allow User to access
			the VSURGIC System for such purposes.
		</p>
		<p class="indent">
			(b) Documentation License. Subject to the terms and conditions contained in this Agreement, Provider hereby
			grants to User a non-exclusive, non-sublicensable, non-transferable (except in compliance with Section
			12(g))
			license to use the Documentation during the Term solely for User’s business purposes in connection with its
			use
			of the VSURGIC System.
		</p>
		<p class="indent">
			(c) Use Restrictions. User shall not use the access to the VSURGIC System or the Documentation for any
			purposes
			beyond the scope of the access granted in this Agreement. User shall not at any time, directly or
			indirectly:
			(i) copy, modify, or create derivative works of the VSURGIC System or Documentation, in whole or in part;
			(ii)
			rent, lease, lend, sell, license, sublicense, assign, distribute, publish, transfer, or otherwise make
			available
			the VSURGIC System or Documentation; (iii) reverse engineer, disassemble, decompile, decode, adapt, or
			otherwise
			attempt to derive or gain access to any software component of the VSURGIC System, in whole or in part; (iv)
			remove any proprietary notices from the VSURGIC System or Documentation; (v) use the VSURGIC System or
			Documentation in any manner or for any purpose that infringes, misappropriates, or otherwise violates any
			intellectual property right or other right of any person, or that violates any applicable law; (vi) use the
			VSURGIC System or Documentation in any manner or for any purpose that violates any policy, procedure, or
			restriction of any applicable Customer; or (vii) permit or allow anyone other than User to access the
			VSURGIC
			System using User’s access granted pursuant to this Agreement.
		</p>
		<p class="indent">
			(d) Reservation of Rights. Provider reserves all rights not expressly granted to User in this Agreement.
			Except
			for the limited rights and licenses expressly granted under this Agreement, nothing in this Agreement
			grants, by
			implication, waiver, estoppel, or otherwise, to User or any third party any intellectual property rights or
			other right, title, or interest in or to the Provider IP.
		</p>
		<p class="indent">
			(e) Suspension. Notwithstanding anything to the contrary in this Agreement, Provider may temporarily suspend
			User’s access to any portion or all of the use the VSURGIC System if: (i) Provider reasonably determines
			that
			(A) there is a threat or attack on any of the Provider IP; (B) User’s use of the Provider IP disrupts or
			poses a
			security risk to the Provider IP or to any Customer or vendor of Provider; (C) User is using the Provider IP
			for
			fraudulent or illegal activities, or in violation of this Agreement; or (D) subject to applicable law, User
			has
			ceased to continue its business in the ordinary course, made an assignment for the benefit of creditors or
			similar disposition of its assets, or become the subject of any bankruptcy, reorganization, liquidation,
			dissolution, or similar proceeding; (ii) any Customer has suspended or terminated User’s access to or use of
			the
			VSURGIC System; or (iii) in accordance with Section 4(a)(iii) (any such suspension described in subclause
			(i),
			(ii), or (iii), a “Service Suspension”). Provider shall use commercially reasonable efforts to provide
			written
			notice of any Service Suspension to User and to provide updates regarding resumption of access to the
			VSURGIC
			System following any Service Suspension. Provider shall use commercially reasonable efforts to resume
			providing
			access to VSURGIC System as soon as reasonably possible after the event giving rise to the Service
			Suspension is
			cured. Provider will have no liability for any damage, liabilities, losses (including any loss of data or
			profits), or any other consequences that User may incur as a result of a Service Suspension. Service
			Suspensions
			by Provider shall be in addition to, and shall not limit in any way, Provider’s right to terminate this
			Agreement pursuant to Section 4(a) or Section 10.
		</p>
		<p class="indent">
			3. User Responsibilities.
		</p>
		<p class="indent">
			(a) General. User is responsible and liable for User’s uses of the VSURGIC System and Documentation
			resulting
			from access provided by Provider and Customers, directly or indirectly, whether such access or use is
			permitted
			by or in violation of this Agreement.
		</p>
		<p class="indent">
			(b) Equipment and Internet Service. User will solely be responsible for the provision and maintenance of
			adequate internet service and quality equipment in order to use the VSURGIC System. User understands and
			agrees
			that it is solely User’s responsibility to confirm the adequacy and compatibility of User’s internet service
			and
			equipment for use with the VSURGIC System, and not the responsibility of Provider.
		</p>
		<p class="indent">
			(c) Access to Customers. User will solely be responsible for securing from Customers access to Customers’
			operating room environments through the VSURGIC System. User understands and agrees that such access is not
			within the control of Provider and will be only allowed or approved by Customer in Customer’s sole
			discretion.
			User will comply with any requirements of Customers or of Provider for the purposes of Customers’
			confirmation
			of the identity of User when accessing the VSURGIC System.
		</p>
		<p class="indent">
			(d) Compliance with Terms of Services and Customer Policies. User agrees that it will comply with Provider’s
			general terms of services and with all terms of this Agreement when using use the VSURGIC System. While
			remotely
			accessing Customer’s locations and premises, User shall follow all of Customer’s policies, procedures, and
			requirements in all respects.
		</p>
		<p class="indent">
			(e) Health Insurance Portability and Accountability Act (“HIPAA”). The User agrees to perform this Agreement
			and
			the use of the VSURGIC System in a manner that complies in all respects with HIPAA and other federal and
			state
			laws and regulations governing the protection, use, and disclosure of confidential and protected patient
			information. If User becomes aware of a violation of HIPAA by itself or on the part of one of its directors,
			officers, shareholders, employees or agents, then User shall immediately notify Provider and Customer of
			such
			HIPAA violation and shall take all actions necessary to mitigate the damage caused by such violation.
		</p>
		<p class="indent">
			(i) Each party agrees to comply with the Health Information Technology for Economic and Clinical Health Act
			of
			2009 (the "HITECH Act"), the Administrative Simplification Provisions of the Health Insurance Portability
			and
			Accountability Act of 1996, as codified at 42 U.S.C.A. §1320d et seq. ("HIPAA") and any current and future
			regulations promulgated under the HITECH Act or HIPAA, including without limitation the federal privacy
			regulations contained in 45 C.F.R. Parts 160 and 164 (the "Federal Privacy Regulations"), the federal
			security
			standards contained in 45 C.F.R. Parts 160, 162 and 164 (the "Federal Security Regulations"), the federal
			standards for electronic transactions contained in 45 C.F.R. Parts 160 and 162 (the "Federal Electronic
			Transaction Regulations"), and the health information breach notification regulations contained in 45 C.F.R.
			Parts 160 and 164 (the “Federal Breach Notification Regulations”), all as amended from time to time and
			collectively referred to herein as the "HIPAA Requirements". Each party agrees not to use or further
			disclose
			any "Protected Health Information," including "Electronic Protected Health Information," (as such terms are
			defined in the HIPAA Requirements) other than as permitted by the HIPAA Requirements and the terms of this
			Agreement. Each party will make its internal practices, books, and records relating to the use and
			disclosure of Protected Health Information available to the Secretary of Health and
			Human Services to the extent required for determining compliance with the HIPAA Requirements.
		</p>
		<p class="indent">

		</p>
		<p class="indent">

		</p>
		<p class="indent">

		</p>
		<p class="indent">

		</p>
		<p class="indent">

		</p>
		<p class="indent">

		</p>
		<p class="indent">
        {{name}}
		</p>
		<div>
</body>

</html>
`;

export const getTemplate: any = (context: any) => {
  return handlebars.compile(html)(context);
};