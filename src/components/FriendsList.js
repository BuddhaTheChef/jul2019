import React, { Component } from "react";
import Footer from "./Footer";

class FriendsList extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            marginTop: "220px",
            height: "-webkit-fill-available",
            display: "flex",
            flexDirection: 'column'
          }}
        >
          <h1 style={{color: 'whitesmoke', textAlign: 'center'}}>How To Build A Computer</h1>
          <div>
          <div style={{background: '#09e6bc', padding: '40px 80px', margin: '90px', borderRadius: '9px',boxShadow: '0 4px 8px 7px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          <h1 style={{color: 'whitesmoke'}}>Picking the right parts</h1>
            <p style={{lineHeight: '2'}}>
Intel Motherboard
The most important part to get right is picking parts that do what you want and work with each other. Choosing wrong or incompatible parts may cause issues, damage to other components or require time for returning said products to retailers. In short, we'll need a CPU, GPU, RAM, motherboard, and some storage to complete the barebones checklist.

Looking inside a PC case can reveal a mess of electronics to someone who doesn't know what does what. Fear not, as we've got you covered when it comes to picking the right parts.
<h1>Products used in this guide</h1>
<ul>
  <li>Cases</li>
  <li>CPU's</li>
  <li>PSU's</li>
  <li>Motherboard</li>
  <li>RAM</li>
  <li>GPU</li>
  <li>Compatability</li>
</ul>

<h3>Here's what you're looking for with components:</h3>

<h4 style={{display: 'inline-block'}}>Case:</h4> Cases come in different form factors, depending on the size of PC you wish to build. Less important overall.
<br/>
<h4 style={{display: 'inline-block'}}>PSU:</h4> Needs to supply enough stable power (500W is usually a good value to start with).
<br/>
<h4 style={{display: 'inline-block'}}>CPU:</h4> You have the choice of AMD and Intel for desktop processors. Take a look at our best guide and note the sockets they use as you'll need to match the socket for the motherboard.
<br/>
<h4 style={{display: 'inline-block'}}>Motherboard:</h4> A motherboard simply needs to match the same socket type of the CPU. Chipset and other features are all down to pricing and preference.
<br/>
<h4 style={{display: 'inline-block'}}>RAM:</h4> Faster frequencies and lower latencies generally mean better the RAM, though you'll need to make sure your motherboard can support the same clock speed or it'll be limited. Most new boards support DDR4.
<br/>
<h4 style={{display: 'inline-block'}}>Storage:</h4> Entirely down to personal requirements, though we always recommend an SSD for installing Windows.
<br/>
<h4 style={{display: 'inline-block'}}>GPU:</h4> This is optional and is only really needed if you plan to do some gaming or intensive workloads. In that case, spend as much as you can.
</p>
</div>
<div style={{background: '#09e6bc', padding: '40px 80px', margin: '90px',borderRadius: '9px',boxShadow: '0 4px 8px 7px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
<h1 style={{color: 'whitesmoke'}}>Tools You Need</h1>
<p style={{lineHeight: '2'}}>
<h3>The essentials for building a pc:</h3>

<ul>
  <li>Toolkit</li>
  <li>LED light source</li>
  <li>Flat workspace (no carpet)</li>
  <li>Anti-static mat</li>
  <li>Anti-static wristband</li>
  <li>Magnetic parts tray</li>
  <li>Free workspace (never use carpet)</li>
</ul>

</p>
</div>

<div style={{background: '#09e6bc', padding: '40px 80px', margin: '90px',borderRadius: '9px',boxShadow: '0 4px 8px 7px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
<h1 style={{color: 'whitesmoke'}}>Installing the PSU</h1>
<p style={{lineHeight: '2'}}>
<ol>
  <li>Slide the PSU into the mounting area with the fan facing up or down.</li>
  <li>Screw in bundled screws (should come with the case) in the four holes at the rear of the case.</li>
  <li>Ensure the unit is switched off using the rear switch.</li>
  <li>Plug the PSU into a power socket to ground the PC.</li>
  <li>Bind all the power cables coming out of the PSU together and put them to one side.</li>
</ol>

<h3>PSU</h3>
Depending on the PSU you've purchased, it may be one of the following:

Fully modular: No cables are permanently connected to the PSU.
Semi-modular: Some cables are permanently fixed, usually ATX and CPU power.
Non-modular: Every cable is connected and cannot be removed from the PSU.
Fully and semi-modular PSUs are easiest to work with as you'll have an easier time making sure all cables look neat and tidy.
</p>
</div>
<div style={{background: '#09e6bc', padding: '40px 80px', margin: '90px',borderRadius: '9px',boxShadow: '0 4px 8px 7px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
<h1 style={{color: 'whitesmoke'}}>Installing the CPU</h1>
<p style={{lineHeight: '2'}}>
<ol>
  <li>Unpack the motherboard from its packaging.</li>
  <li>Place the motherboard atop its cardboard box. (It's safe here. Never place on carpet.)</li>
  <li>Open the CPU latch.</li>
  <li>Remove the plastic cap.</li>
  <li>Insert the CPU, matching notches and indicators to the socket. (Do not apply pressure, it should lie flush without force.)</li>
  <li>Close the latch to secure the CPU. (This step will require some amount of pressure.)</li>
  <li>Apply CPU Paste</li>
</ol>
Now we can use the thermal paste and attach the CPU cooler to complete everything processor-related. Depending on the cooler you've purchased, you may have a layer of thermal paste already applied. If not, we'll need to do this before installing the cooler. (Tip: less is more.)
</p>
</div>

<div style={{background: '#09e6bc', padding: '40px 80px', margin: '90px',borderRadius: '9px',boxShadow: '0 4px 8px 7px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
<h1 style={{color: 'whitesmoke'}}>Installing the RAM</h1>
<p style={{lineHeight: '2'}}>
<h3>RAM</h3>
RAM is a sensitive component and as such should be handled with care. It's recommended that contact is avoided with the contact pins on the underside of each module. The RAM slots on a motherboard are located to the right of the CPU but do check the motherboard manual as to which RAM slots are to be used, depending on how many sticks you have. A motherboard with four slots or more, you'll want to populate slots one and two first.
<ol>
  <li>Match the RAM module notches to those found in the slots on the motherboard.</li>
  <li>Insert the module carefully, using light even force across the stick.</li>
  <li>After it inserts into the slot, push down on either side of the RAM module until it securely clicks into place.</li>
</ol>
</p>
</div>

<div style={{background: '#09e6bc', padding: '40px 80px', margin: '90px',borderRadius: '9px',boxShadow: '0 4px 8px 7px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
<h1 style={{color: 'whitesmoke'}}>Installing the moterboard</h1>
<p style={{lineHeight: '2'}}>
With the CPU, the cooler, and RAM modules installed, the motherboard is ready to be screwed to the back plate inside the case. First, we need to install the I/O shield, a long piece of metal that has cutouts for the all the rear ports and connections. This is optional but recommended accessory helps provide electromagnetic interference (EMI) protection.
<ol>
  <li>Place the I/O shield to the rear cutout in the PC case and click into place. (This can be super-fiddly.)</li>
  <li>Hover the motherboard atop the back plate to see where standoffs need to be screwed in. Different sizes need different holes.</li>
  <li>Install the standoffs for the motherboard, if not already pre-installed. (Some backplates may feature ATX labels next to holes to guide you.)</li>
  <li>Lower the motherboard onto the standoffs.</li>
  <li>Tighten the screws, but do not overtighten them — just enough to secure the board in place.</li>
  <li>Check the sides of the motherboard by lightly pulling to make sure every inch has been secured.</li>
</ol>
<h3>What are Standoffs?</h3>
Standoffs are the screws that are installed on the motherboard backplate, which then allows the motherboard to rest atop them and for screws to secure the board. Some cases have them pre-installed.

</p>
</div>
<div style={{background: '#09e6bc', padding: '40px 80px', margin: '90px',borderRadius: '9px',boxShadow: '0 4px 8px 7px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
<h1 style={{color: 'whitesmoke'}}>Installing storage drives</h1>
<p style={{lineHeight: '2'}}>
<h3>SSD</h3>
Storage drives are important devices that hold not only the operating system but also all programs, personal media, and all other data. It's recommended to use an SSD (2.5-inch) drive for the main OS partition, which enables for quick booting and solid performance. Data can be stored on traditional (3.5-inch) mechanical drives.

Depending on the case and how drive bays are configured, 2.5- and 3.5-inch drives may be able to be installed at the same points or using dedicated brackets. Be sure to double check the PC case manual. We'll go over how your PC case may have both configured below.
<ol>
  <h4>2.5-inch SSD</h4>
  <li>Take the SSD bracket and attach the drive to it, lining up the screw holes.</li>
  <li>Screw in the drive using appropriate screws.</li>
  <li>Attach the bracket and secure it to the case.</li>
  <h4>3.5-inch HDD</h4>
  <li>Extract the HDD bracket from one of the bays.</li>
  <li>Slide the mechanical drive into the bracket.</li>
  <li>Secure the drive to said bracket using screws or screwless mechanism.</li>
  <li>Slide the bracket and drive back into the bay.</li>
</ol>





</p>
</div>
<div style={{background: '#09e6bc', padding: '40px 80px', margin: '90px',borderRadius: '9px',boxShadow: '0 4px 8px 7px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
<h1 style={{color: 'whitesmoke'}}>Plug everything in</h1>
<p style={{lineHeight: '2'}}>
<i>Generally speaking, it's best to start with the power to the motherboard itself.</i>
<h3>Motherboard: </h3>
<p>The PSU has two cables for the board: 24-pin ATX and 8-pin CPU. Route these behind the backplate, using available grommets and cutouts.</p>
<h3>Storage drives:</h3>
<p> Most SSDs and HDDs today use SATA connectors. These are 15-pin flat connectors with a dip on one side to prevent plugging them in the wrong way. Route these from the PSU to the drive bays and mounts, using more than one lead from the PSU if required.
</p>
<h3>PSU Cable</h3>
<ol>
  <li>We need to connect the storage drives to the motherboard, using SATA data cables. The motherboard usually has SATA ports located to the lower-left hand-side. Much like the power cables, route these through cut-outs and grommets to the drive bays and mounts.</li>
  <li>We now power storage drives to the motherboard</li>
  <li>Plug in data channels between drives and the main board</li>
  <li>Connect front panel I/O and other optional connectors (front panel USB, HD audio, etc.). Connecting the front panel I/O, which includes the power switch, reset switch, HDD activity LED, and power LED can be a tricky step.</li>
  <li>The motherboard manual should provide information as to the layout of these pins and what they correspond to</li>
</ol>
<h3>Motherboard I/O</h3>
The front USB 3.0 and HD audio pins can be located on the motherboard. Again, refer to the manual for exact placement as not all motherboards are created equal.

<h3>Adding case fans</h3>
Throwing in an extra fan or two is worthwhile. PC cases may come with fans pre-installed, but if not it's simple to screw them into fan mounts. Just be sure to align them correctly and have the blades pointing the correct way. Fans can have small arrows on the side that show which way the blades spin and where airflow will be directed.
</p>
</div>


<div style={{background: '#09e6bc', padding: '40px 80px', margin: '90px',borderRadius: '9px',boxShadow: '0 4px 8px 7px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
<h1 style={{color: 'whitesmoke'}}>Installing a GPU</h1>
<p style={{lineHeight: '2'}}>
<h3>GPU</h3>
<ol>
  <li>Unscrew the rear PCI case brackets that align with the PCI slot you will use.</li>
  <li>Check that the motherboard GPU card latch is open.</li>
  <li>Remove the protective cap that covers the PCIe strip on the GPU.</li>
  <li>Line up the GPU to the PCIe slot on the motherboard.</li>
  <li>Carefully insert the card and push down once it has made contact with the slot, listening out for a click of the latch securing.</li>
  <li>Use the rear bracket screws to secure the GPU to the PC case for added stability.</li>
  <li>If the GPU requires additional PSU power, connect the necessary cables.</li>
</ol>
</p>
</div>

          </div>
        </div>
        <footer className="mainFooterDiv" style={{marginTop: '6050px'}}>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default FriendsList;
