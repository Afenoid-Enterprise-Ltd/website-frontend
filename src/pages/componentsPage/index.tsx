import { Button, Text, Loader } from "../../ui";

const ComponentsPage = () => {
  return (
    <section className="w-screen p-4">
      <div className="w-full">
        <h1 className="mb-8 text-center text-4xl">Components Page</h1>
        
        <details>
          <summary className="pb-5 text-3xl font-bold">
            Button Component
          </summary>
          <Button
            buttonType="button"
            label="Primary Button"
            variant="primary"
            customClassName="mb-2"
          />
          <Button
            buttonType="button"
            label="Secondary Button"
            variant="secondary"
            customClassName="mb-2"
          />
          <Button
            buttonType="button"
            label="Tertiary Button"
            variant="tertiary"
            customClassName="mb-2"
          />
        </details>

        <details>
          <summary className="pb-5 text-3xl font-bold">
            Typography Component
          </summary>
          <Text variant="h1" fontFamily="proxima-nova" color="af-green">
            Heading 1 with Proxima Nova and color of
            afenoid&ndash;green
          </Text>
          <Text variant="h2" fontFamily="proxima-nova" color="af-yellow">
            Heading 2 with Proxima Nova and color of
            afenoid&ndash;yellow
          </Text>
          <Text variant="h3" fontFamily="proxima-nova" color="af-lemon">
            Heading 3 with Proxima Nova and color of
            afenoid&ndash;lemon
          </Text>
          <Text variant="h4" fontFamily="proxima-nova" color="af-light-lemon">
            Heading 4 with Proxima Nova and color of
            afenoid&ndash;light&ndash;lemon
          </Text>
          <Text variant="h5" fontFamily="gambetta" color="af-dark-green">
            Heading 5 with Proxima Nova and color of
            afenoid&ndash;dark&ndash;green
          </Text>
          <Text variant="h6" fontFamily="gambetta" color="floral-white">
            Heading 6 with Proxima Nova and color of
            floral&ndash;white
          </Text>
        </details>
        <details>
          <summary className="pb-5 text-3xl font-bold">
            Loading Component
          </summary>
          <Loader />
        </details>
      </div>
    </section>
  );
};

export { ComponentsPage };
