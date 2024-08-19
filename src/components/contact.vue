<template>
  <div class="mccan page">
            <h3 class="title-small">LOCATION</h3>
            <h2 class="title">Contact Me</h2>
            <div class="content">
                <div class="row">
                    <div class="col-md-12">
                        <p>If you’d like to talk about a project, our work or anything else then get in touch.</p>
                        <div class="list">
                            <ul>
                                <li><strong>Phone :</strong> +8801799382934</li>
                                <li><strong>Email :</strong> sadekchowdhury47@gmail.com</li>
                                <li><strong>Address :</strong> Dhaka, Bangladesh</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="divider1"></div>
                <div class="row">
                    <div class="col-md-8">
                        <h6 class="mb-20"><strong>Get in touch</strong></h6>
                        <form method="post" class="contact__form" action="https://duruthemes.com/demo/html/mccan/dark/mail.php">
                            <!-- Form message -->
                            <div class="row">
                                <div class="col-12">
                                    <div class="alert alert-success contact__msg" style="display: none" role="alert">
                                        Your message was sent successfully.
                                    </div>
                                </div>
                            </div>
                            <!-- Form elements -->
                            <div class="row" id="contact-form-section">
                                <div class="col-md-6 form-group" >
                                    <input name="name" type="text" placeholder="Your Name *" required> 
                                </div>
                                <div class="col-md-6 form-group">
                                    <input name="email" type="email" placeholder="Your Email *" required> 
                                </div>
                                <div class="col-md-6 form-group" >
                                    <input name="phone" type="text" placeholder="Your Number *" required> 
                                </div>
                                <div class="col-md-6 form-group">
                                    <input name="subject" type="text" placeholder="Subject *" required> 
                                </div>
                                <div class="col-md-12 form-group">
                                    <textarea name="message" id="message" cols="30" rows="4" placeholder="Message *" required></textarea>
                                </div>
                                <div class="col-md-12">
                                    <input name="submit" type="submit"  value="Send Message">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>