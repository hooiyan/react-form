import { FormHelperText, Input, Select } from '@chakra-ui/react'

import AppFormControl from '@/components/AppFormControl'

function CustomPronoun({ value, onChange }) {
  return (
    <>
      <AppFormControl label="">
        <Select
          name="customPronoun"
          value={value}
          onChange={(e) => onChange(e)}
          // placholder="Select your pronoun"
        >
          <option
            disabled
            value="none"
          >{`Select your pronoun`}</option>
          <option value="she">{`She: "Wish her a happy birthday!"`}</option>
          <option value="he">{`He: "Wish him a happy birthday!"`}</option>
          <option value="they">{`They: "Wish them a happy birthday!"`}</option>
        </Select>
        <FormHelperText
          textAlign="left"
          fontSize="xs"
        >
          Your pronoun is visible to everyone.
        </FormHelperText>

        <Input
          placeholder="Gender (optional)"
          bgColor="gray.100"
          mt={4}
        />
      </AppFormControl>
    </>
  )
}

export default CustomPronoun
