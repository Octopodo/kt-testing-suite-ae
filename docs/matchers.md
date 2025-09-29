# Matchers Documentation

Here you can find a reference to all AE-specific matchers available in KT Testing Suite AE.

## Index

### Layer Matchers

- [toBeLayer](#tobelayer)
- [toBeAVLayer](#tobeavlayer)
- [toBeTextLayer](#tobetextlayer)
- [toBeCameraLayer](#tobecameralayer)
- [toBeLightLayer](#tobelightlayer)
- [toBeSolidLayer](#tobesolidlayer)
- [toBeFootageLayer](#tobefootagelayer)
- [toBeCompLayer](#tobecomplayer)
- [toBeNullLayer](#tobenulllayer)
- [toBeAdjustmentLayer](#tobeadjustmentlayer)
- [toBeShapeLayer](#tobeshapelayer)
- [toBeAudioLayer](#tobeaudiolayer)
- [toMatchDuration](#tomatchduration)
- [toMatchIndex](#tomatchindex)
- [toMatchOpacity](#tomatchopacity)
- [toMatchScale](#tomatchscale)
- [toMatchPosition](#tomatchposition)
- [toMatchRotation](#tomatchrotation)
- [toMatchXRotation](#tomatchxrotation)
- [toMatchYRotation](#tomatchyrotation)
- [toMatchZRotation](#tomatchzrotation)
- [toMatch3DLayer](#tomatch3dlayer)
- [toToBeLocked](#totobelocked)
- [toToBeSolo](#totobesolo)
- [toToBeShy](#totobesh)
- [toToBeGuideLayer](#totobeguidelayer)
- [toToBeHidden](#totobehidden)
- [toHaveEffect](#tohaveeffect)
- [toMatchEffectByMatchName](#tomatcheffectbymatchname)
- [toHaveParent](#tohaveparent)
- [toMatchStartTime](#tomatchstarttime)
- [toMatchInPoint](#tomatchinpoint)
- [toMatchOutPoint](#tomatchoutpoint)

### Project Item Matchers

- [toBeComp](#tobecomp)
- [toBeFolder](#tobefolder)
- [toBeVideo](#tobevideo)
- [toBeImage](#tobeimage)
- [toBeAudio](#tobeaudio)
- [toBeItem](#tobeitem)
- [toBeCollection](#tobecollection)

## Layer Matchers

### toBeLayer

Asserts that the actual object is an instance of Layer.

Examples:

```typescript
AE.expect(layer).toBeLayer();
```

### toBeAVLayer

Asserts that the actual object is an instance of AVLayer.

Examples:

```typescript
AE.expect(layer).toBeAVLayer();
```

### toBeTextLayer

Asserts that the actual object is an instance of TextLayer.

Examples:

```typescript
AE.expect(layer).toBeTextLayer();
```

### toBeCameraLayer

Asserts that the actual object is an instance of CameraLayer.

Examples:

```typescript
AE.expect(layer).toBeCameraLayer();
```

### toBeLightLayer

Asserts that the actual object is an instance of LightLayer.

Examples:

```typescript
AE.expect(layer).toBeLightLayer();
```

### toBeSolidLayer

Asserts that the actual object is a solid layer (AVLayer with SolidSource).

Examples:

```typescript
AE.expect(layer).toBeSolidLayer();
```

### toBeFootageLayer

Asserts that the actual object is a footage layer (AVLayer with FootageSource).

Examples:

```typescript
AE.expect(layer).toBeFootageLayer();
```

### toBeCompLayer

Asserts that the layer's source is a composition.

Examples:

```typescript
AE.expect(layer).toBeCompLayer();
```

### toBeNullLayer

Asserts that the layer is a null layer.

Examples:

```typescript
AE.expect(layer).toBeNullLayer();
```

### toBeAdjustmentLayer

Asserts that the layer is an adjustment layer.

Examples:

```typescript
AE.expect(layer).toBeAdjustmentLayer();
```

### toBeShapeLayer

Asserts that the actual object is an instance of ShapeLayer.

Examples:

```typescript
AE.expect(layer).toBeShapeLayer();
```

### toBeAudioLayer

Asserts that the layer has an audio source.

Examples:

```typescript
AE.expect(layer).toBeAudioLayer();
```

### toMatchDuration

Asserts that the layer's duration (outPoint - inPoint) matches the expected value.

Parameters:

- `expectedDuration` (number): The expected duration in seconds.

Examples:

```typescript
AE.expect(layer).toMatchDuration(10);
```

### toMatchIndex

Asserts that the layer's index matches the expected value.

Parameters:

- `expectedIndex` (number): The expected index.

Examples:

```typescript
AE.expect(layer).toMatchIndex(1);
```

### toMatchOpacity

Asserts that the layer's opacity matches the expected value.

Parameters:

- `expectedOpacity` (number): The expected opacity (0-100).

Examples:

```typescript
AE.expect(layer).toMatchOpacity(100);
```

### toMatchScale

Asserts that the layer's scale matches the expected value.

Parameters:

- `expectedScale` ([number, number] | [number, number, number]): The expected scale.

Examples:

```typescript
AE.expect(layer).toMatchScale([100, 100]);
AE.expect(layer).toMatchScale([100, 100, 100]);
```

### toMatchPosition

Asserts that the layer's position matches the expected value.

Parameters:

- `expectedPosition` ([number, number] | [number, number, number]): The expected position.

Examples:

```typescript
AE.expect(layer).toMatchPosition([960, 540]);
AE.expect(layer).toMatchPosition([960, 540, 0]);
```

### toMatchRotation

Asserts that the layer's rotation matches the expected value.

Parameters:

- `expectedRotation` (number): The expected rotation in degrees.

Examples:

```typescript
AE.expect(layer).toMatchRotation(0);
```

### toMatchXRotation

Asserts that the layer's X rotation matches the expected value.

Parameters:

- `expectedXRotation` (number): The expected X rotation.

Examples:

```typescript
AE.expect(layer).toMatchXRotation(0);
```

### toMatchYRotation

Asserts that the layer's Y rotation matches the expected value.

Parameters:

- `expectedYRotation` (number): The expected Y rotation.

Examples:

```typescript
AE.expect(layer).toMatchYRotation(0);
```

### toMatchZRotation

Asserts that the layer's Z rotation matches the expected value.

Parameters:

- `expectedZRotation` (number): The expected Z rotation.

Examples:

```typescript
AE.expect(layer).toMatchZRotation(0);
```

### toMatch3DLayer

Asserts that the layer's 3D state matches the expected value.

Parameters:

- `expected3D` (boolean): The expected 3D state (default true).

Examples:

```typescript
AE.expect(layer).toMatch3DLayer(true);
```

### toToBeLocked

Asserts that the layer's locked state matches the expected value.

Parameters:

- `expectedLocked` (boolean): The expected locked state (default true).

Examples:

```typescript
AE.expect(layer).toToBeLocked(false);
```

### toToBeSolo

Asserts that the layer's solo state matches the expected value.

Parameters:

- `expectedSolo` (boolean): The expected solo state (default true).

Examples:

```typescript
AE.expect(layer).toToBeSolo(false);
```

### toToBeShy

Asserts that the layer's shy state matches the expected value.

Parameters:

- `expectedShy` (boolean): The expected shy state (default true).

Examples:

```typescript
AE.expect(layer).toToBeShy(false);
```

### toToBeGuideLayer

Asserts that the layer's guide state matches the expected value.

Parameters:

- `expectedGuideLayer` (boolean): The expected guide state (default true).

Examples:

```typescript
AE.expect(layer).toToBeGuideLayer(false);
```

### toToBeHidden

Asserts that the layer's visibility state matches the expected value.

Parameters:

- `expectedHidden` (boolean): Whether the layer is hidden.

Examples:

```typescript
AE.expect(layer).toToBeHidden(false);
```

### toHaveEffect

Asserts that the layer has an effect with the specified name.

Parameters:

- `effectName` (string): The effect name.

Examples:

```typescript
AE.expect(layer).toHaveEffect("Gaussian Blur");
```

### toMatchEffectByMatchName

Asserts that the layer has an effect with the specified matchName.

Parameters:

- `matchName` (string): The effect matchName.

Examples:

```typescript
AE.expect(layer).toMatchEffectByMatchName("ADBE Gaussian Blur");
```

### toHaveParent

Asserts that the layer has the specified parent.

Parameters:

- `expectedParent` (Layer): The expected parent.

Examples:

```typescript
AE.expect(layer).toHaveParent(parentLayer);
```

### toMatchStartTime

Asserts that the layer's startTime matches the expected value.

Parameters:

- `expectedStartTime` (number): The expected startTime.

Examples:

```typescript
AE.expect(layer).toMatchStartTime(0);
```

### toMatchInPoint

Asserts that the layer's inPoint matches the expected value.

Parameters:

- `expectedInPoint` (number): The expected inPoint.

Examples:

```typescript
AE.expect(layer).toMatchInPoint(0);
```

### toMatchOutPoint

Asserts that the layer's outPoint matches the expected value.

Parameters:

- `expectedOutPoint` (number): The expected outPoint.

Examples:

```typescript
AE.expect(layer).toMatchOutPoint(10);
```

## Project Item Matchers

### toBeComp

Asserts that the actual object is an instance of CompItem.

Examples:

```typescript
AE.expect(item).toBeComp();
```

### toBeFolder

Asserts that the actual object is an instance of FolderItem.

Examples:

```typescript
AE.expect(item).toBeFolder();
```

### toBeVideo

Asserts that the item is a video footage.

Examples:

```typescript
AE.expect(item).toBeVideo();
```

### toBeImage

Asserts that the item is an image footage.

Examples:

```typescript
AE.expect(item).toBeImage();
```

### toBeAudio

Asserts that the item is an audio footage.

Examples:

```typescript
AE.expect(item).toBeAudio();
```

### toBeItem

Asserts that the actual object is a valid project item (comp, folder, video, image, audio).

Examples:

```typescript
AE.expect(item).toBeItem();
```

### toBeCollection

Asserts that the actual object is a collection (ItemCollection, LayerCollection, etc.).

Examples:

```typescript
AE.expect(collection).toBeCollection();
```

## Additional Links

- [KT Testing Suite Core](https://github.com/Octopodo/kt-testing-suite-core)
- [KT ExtendScript Builder](https://github.com/Octopodo/kt-extendscript-builder)
- [Bolt CEP](https://github.com/hyperbrew/bolt-cep)
- [After Effects Scripting Guide](https://ae-scripting.docsforadobe.dev/)
- [Types for Adobe](https://github.com/docsforadobe/Types-for-Adobe)
