import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function ProductFilterItem() {
    return (
        <Autocomplete className="productFilters-item"
            multiple
            id="checkboxes-tags-demo"
            options={top5Firms}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.title}
                </li>
            )}

            renderInput={(params) => (
                <TextField {...params} label="Производитель"  />
            )}
        />
    );
}

const top5Firms = [
    { title: 'MSI'},
    { title: 'ASUS'},
    { title: 'GIGABYTE'},
    { title: 'KFA2'},
    { title: 'PALIT'}
];
