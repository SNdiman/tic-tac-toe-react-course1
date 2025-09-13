# Tic-Tac-Toe React App - Issues and Fixes 

## Summary

The tic-tac-toe React app had several critical issues that prevented the SVG icons from displaying when users clicked on the game tiles. This document outlines the problems found and the fixes applied for future reference

---

## Issues Found and Fixed

### 1. **SVG File Format Issues**

**Problem**: All SVG files contained invalid XML declarations and DOCTYPE declarations that prevented React from properly importing them as components.

**Original SVG Structure** (BROKEN):

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 viewBox="0 0 460.775 460.775" xml:space="preserve">
<!-- Very complex path data -->
</svg>
```

**Fixed SVG Structure** (WORKING):

```xml
<svg width="100%" height="100%" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0..."/>
</svg>
```

**Why this was broken**: React's `{ReactComponent as IconName}` import syntax requires clean SVG files without XML declarations or DOCTYPE statements. These declarations caused the import to fail silently.

---

### 2. **Incorrect SVG Content**

**Problem**: The original `icon-o.svg` file didn't actually contain a circular "O" shape - it contained a vertical line/rectangle.

**Original O SVG**: Created a vertical line instead of a circle
**Fixed O SVG**: Proper circle with inner hole, creating the classic "O" shape

---

### 3. **Board State Mutation Issue**

**Problem**: The `updateBoard` function in `GameContext.js` was mutating the array directly instead of creating a new array, which prevented React from detecting state changes and re-rendering components.

**Original Code** (BROKEN):

```javascript
const updateBoard = (index) => {
  let updatedBoard = game.board; // Direct reference - no new array!
  updatedBoard[index] = game.turn;
  setGame({
    ...game,
    board: updatedBoard, // Same reference, React won't re-render
    turn: game.turn === "x" ? "o" : "x",
  });
};
```

**Fixed Code** (WORKING):

```javascript
const updateBoard = (index) => {
  let updatedBoard = [...game.board]; // Creates new array
  updatedBoard[index] = game.turn;
  setGame({
    ...game,
    board: updatedBoard, // New reference, React will re-render
    turn: game.turn === "x" ? "o" : "x",
  });
};
```

**Why this was broken**: React uses reference equality to detect state changes. Mutating the original array means the reference stays the same, so React thinks nothing changed and doesn't re-render the components.

---

### 4. **Invalid JSX Syntax**

**Problem**: In `GameCell.jsx`, the "o" cell rendering had invalid JSX syntax - missing parentheses around the JSX return statement.

**Original Code** (BROKEN):

```jsx
} else if (cellItem === "o") {
    return<CellStyle>  // Missing parentheses!
        <IconO className='iconY'/>
    </CellStyle>
}
```

**Fixed Code** (WORKING):

```jsx
} else if (cellItem === "o") {
    return (
        <CellStyle>
            <IconO className="markedItem" />
        </CellStyle>
    );
}
```

---

### 5. **CSS Class Naming Inconsistencies**

**Problem**: The styled components used different CSS class names than what the components were trying to use.

**Original Styling** (INCONSISTENT):

```javascript
.iconX {
    height: 3rem;
    width: 3rem;
    fill: ${(props) => props.theme.colors.text};
}
.iconY {
    height: 3rem;
    width: 3rem;
    fill: ${(props) => props.theme.colors.text};
}
```

**Fixed Styling** (CONSISTENT):

```javascript
.markedItem {
    path {
        fill: ${(props) => props.theme.colors.primary};
    }
}
.outlineIcon {
    path {
        stroke: ${(props) => props.theme.colors.primary};
        stroke-width: 0;
    }
}
```

**Why this was better**:

- Uses path-specific styling for SVG elements
- Separates filled icons (`markedItem`) from outline icons (`outlineIcon`)
- Proper stroke handling for hover effects

---

### 6. **Missing Hover Effects**

**Problem**: The original version had no visual feedback when hovering over empty cells.

**Added Feature**:

```javascript
&:hover {
    .outlineIcon {
        path {
            stroke-width: 2; // Shows outline on hover
        }
    }
}
```

---

## Files Modified

### SVG Files Replaced:

- `src/assets/svgs/icon-x.svg` - Clean X icon
- `src/assets/svgs/icon-o.svg` - Proper circular O icon
- `src/assets/svgs/icon-x-outline.svg` - Outline X for hover states
- `src/assets/svgs/icon-o-outline.svg` - Outline O for hover states
- `src/assets/svgs/tic-tac-toe.svg` - Header logo (already fixed)

### Code Files Updated:

- `src/contexts/GameContext.js` - Fixed array mutation issue
- `src/components/GameCell/GameCell.jsx` - Fixed JSX syntax and class names
- `src/components/GameCell/GameCell.styled.js` - Updated CSS classes and styling approach

---

## Root Cause Analysis

The main issue was a **cascade of problems**:

1. **Invalid SVG files** prevented React from importing the icons
2. **State mutation** prevented React from re-rendering when game state changed
3. **Invalid JSX syntax** broke the "o" icon rendering entirely
4. **Mismatched CSS classes** meant even if icons loaded, they wouldn't be styled correctly

Even if one issue was fixed, the others would have prevented the app from working. All issues needed to be resolved together for the icons to display properly.

---

