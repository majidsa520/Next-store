"use client";
import SubmitButton from "@/components/form/Buttons";
import CheckBoxInput from "@/components/form/CheckBoxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextareaInput from "@/components/form/TextareaInput";
import { createProductAction } from "@/lib/actions";
import { faker } from "@faker-js/faker";

const name = faker.commerce.productName();
const company = faker.company.name();
const description = faker.lorem.paragraph({ min: 10, max: 14 });

export default function CreateProductForm() {
  return (
    <FormContainer action={createProductAction}>
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput
          name="name"
          type="text"
          label="product name"
          defaultValue={name}
        />
        <FormInput
          name="company"
          type="text"
          label="company"
          defaultValue={company}
        />
        <PriceInput />
        <ImageInput />
        <TextareaInput
          name="description"
          label="product description"
          defaultValue={description}
          className="col-span-2"
        />
        <CheckBoxInput
          name="featured"
          label="featured"
          className="col-span-2"
        />
        <SubmitButton />
      </div>
    </FormContainer>
  );
}
