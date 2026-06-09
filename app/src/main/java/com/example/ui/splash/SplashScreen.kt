package com.example.ui.splash

import androidx.compose.animation.core.*
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import com.example.R
import com.example.ui.theme.Gold
import com.example.ui.theme.LuxuryBlack
import kotlinx.coroutines.delay

@Composable
fun SplashScreen(onAnimationFinished: () -> Unit) {
    val scale = remember { Animatable(0f) }
    val alpha = remember { Animatable(0f) }

    LaunchedEffect(key1 = true) {
        scale.animateTo(
            targetValue = 1f,
            animationSpec = tween(durationMillis = 1500, easing = OvershootInterpolator(2f).toEasing())
        )
        alpha.animateTo(
            targetValue = 1f,
            animationSpec = tween(durationMillis = 1000)
        )
        delay(1500)
        onAnimationFinished()
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(
                brush = Brush.verticalGradient(
                    colors = listOf(LuxuryBlack, Color(0xFF1A1A1A))
                )
            ),
        contentAlignment = Alignment.Center
    ) {
        // Background Runway Image (Optional, for premium look)
        Image(
            painter = painterResource(id = R.drawable.fashion_backgrounds_1780920075210),
            contentDescription = null,
            modifier = Modifier.fillMaxSize().alpha(0.3f),
            contentScale = ContentScale.Crop
        )

        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Image(
                painter = painterResource(id = R.drawable.app_logo_1780920090437),
                contentDescription = "RGW Logo",
                modifier = Modifier
                    .size(200.dp)
                    .scale(scale.value)
                    .alpha(alpha.value)
            )
        }
    }
}

private fun OvershootInterpolator(tension: Float): android.view.animation.OvershootInterpolator {
    return android.view.animation.OvershootInterpolator(tension)
}

private fun android.view.animation.Interpolator.toEasing(): Easing {
    return Easing { x -> getInterpolation(x) }
}
