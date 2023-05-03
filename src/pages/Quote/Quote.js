import React from "react";
import Main from "../../components/shared/layouts/Main";
import Header from "../../components/shared/components/Header";

const Quote = () => {
  return (
    <>
      <Header />
      <Main>
        <div className="background-photo-2"></div>
        <header>
          <h2>get a quote</h2>
        </header>
        <section class="wrapper style5">
          <div class="inner">
            <h4>Quote</h4>
            <form method="post" action="#">
              <div class="row gtr-uniform">
                <div class="col-6 col-12-xsmall">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    value=""
                    placeholder="First Name"
                    required
                  />
                </div>
                <div class="col-6 col-12-xsmall">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    value=""
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div class="col-6 col-12-xsmall">
                  <input
                    type="email"
                    name="demo-email"
                    id="demo-email"
                    value=""
                    placeholder="Email"
                    required
                  />
                </div>

                <div class="col-6 col-12-xsmall">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    required
                  />
                </div>
                <div class="col-12">
                  <h5>Date of Event</h5>
                  <div class="row">
                    <div class="col-12-small">
                      <input type="date" name="date" id="date" />
                    </div>
                  </div>
                </div>

                <div class="number-of-guest col-12">
                  <h5>Type of Event</h5>
                  <div class="row">
                    <div class="col-4 col-12-small">
                      <input
                        type="radio"
                        id="event-celebration"
                        name="type-of-event"
                      />
                      <label for="event-celebration">Celebration</label>
                    </div>
                    <div class="col-4 col-12-small">
                      <input
                        type="radio"
                        id="event-church"
                        name="type-of-event"
                      />
                      <label for="event-church">Church Gathering</label>
                    </div>
                    <div class="col-4 col-12-small">
                      <input
                        type="radio"
                        id="event-corporate"
                        name="type-of-event"
                      />
                      <label for="event-corporate">Corporate Event</label>
                    </div>
                    <div class="col-4 col-12-small">
                      <input
                        type="radio"
                        id="event-music"
                        name="type-of-event"
                      />
                      <label for="event-music">Music & Film Festival</label>
                    </div>
                    <div class="col-4 col-12-small">
                      <input
                        type="radio"
                        id="event-private"
                        name="type-of-event"
                      />
                      <label for="event-private">Private Event</label>
                    </div>
                    <div class="col-4 col-12-small">
                      <input
                        type="radio"
                        id="event-wedding"
                        name="type-of-event"
                      />
                      <label for="event-wedding">Wedding</label>
                    </div>
                  </div>
                </div>

                <div class="number-of-guest col-12">
                  <h5>Number of guest</h5>
                  <div class="row">
                    <div class="col-4 col-12-small">
                      <input
                        type="radio"
                        id="demo-priority-low"
                        name="number-of-guest"
                      />
                      <label for="demo-priority-low">50 - 100 guests</label>
                    </div>
                    <div class="col-4 col-12-small">
                      <input
                        type="radio"
                        id="demo-priority-normal"
                        name="number-of-guest"
                      />
                      <label for="demo-priority-normal">100 - 150 guests</label>
                    </div>
                    <div class="col-4 col-12-small">
                      <input
                        type="radio"
                        id="demo-priority-high"
                        name="number-of-guest"
                      />
                      <label for="demo-priority-high">150 - 200 guests</label>
                    </div>
                  </div>
                </div>

                <div class="number-of-guest col-12">
                  <h5>duration</h5>
                  <div class="row">
                    <div class="col-4 col-12-small">
                      <input type="radio" id="duration-2" name="duration" />
                      <label for="duration-2">2 hrs</label>
                    </div>
                    <div class="col-4 col-12-small">
                      <input type="radio" id="duration-3" name="duration" />
                      <label for="duration-3">3 hrs</label>
                    </div>
                    <div class="col-4 col-12-small">
                      <input type="radio" id="duration-4" name="duration" />
                      <label for="duration-4">4 hrs</label>
                    </div>
                  </div>
                </div>

                <div class="number-of-guest col-12">
                  <h5>Event Location</h5>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value=""
                    placeholder="Specify"
                    required
                  />
                </div>
                <div class="col-12">
                  <h5>Describe Your Event</h5>
                  <textarea
                    name="demo-message"
                    id="demo-message"
                    placeholder="Enter your message"
                    rows="6"
                    minlength="30"
                    required
                  ></textarea>
                </div>
                <div class="col-12">
                  <ul class="actions">
                    <li>
                      <input
                        type="submit"
                        value="Get a quote"
                        class="primary"
                      />
                    </li>
                    <li>
                      <input type="reset" value="Reset" />
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </section>
      </Main>
    </>
  );
};

export default Quote;
