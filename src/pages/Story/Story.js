import React from "react";
import Main from "../../components/shared/layouts/Main";
import Header from "../../components/shared/components/Header";

const Story = () => {
  return (
    <>
      <Header />
      <Main>
        <header>
          <h2>Our Story</h2>
        </header>
        <section class="wrapper style5">
          <div class="inner">
            <h3>how we started</h3>
            <p>
              Morbi mattis mi consectetur tortor elementum, varius pellentesque
              velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac
              scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis
              lacinia velit aliquet. Duis non efficitur nisi, id malesuada
              justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus
              leo, tempus sed finibus eget, fringilla quis risus. Maecenas et
              lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis
              sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet
              justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel
              ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit
              accumsan cursus. Etiam ut gravida sapien.
            </p>

            <p>
              Vestibulum ultrices risus velit, sit amet blandit massa auctor sit
              amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor
              mollis id vel diam. Praesent sit amet posuere risus, eu faucibus
              lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta
              quam. Proin nec dui cursus, posuere dui eget interdum. Fusce
              lectus magna, sagittis at facilisis vitae, pellentesque at etiam.
              Quisque posuere leo quis sem commodo, vel scelerisque nisi
              scelerisque. Suspendisse id quam vel tortor tincidunt suscipit.
              Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante
              tincidunt. Mauris felis nec felis elementum varius.
            </p>
          </div>
        </section>
      </Main>
    </>
  );
};

export default Story;
