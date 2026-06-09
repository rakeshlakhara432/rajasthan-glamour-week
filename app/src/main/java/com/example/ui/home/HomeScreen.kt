package com.example.ui.home

import androidx.compose.foundation.*
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Notifications
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import com.example.R
import com.example.data.models.Event
import com.example.ui.theme.Gold
import com.example.ui.theme.LuxuryBlack
import com.example.ui.theme.LuxuryGrey

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen(
    viewModel: HomeViewModel,
    onEventClick: (String) -> Unit,
    onProfileClick: () -> Unit
) {
    val events by viewModel.events.collectAsState()

    Scaffold(
        topBar = {
            HomeTopBar(onProfileClick)
        },
        containerColor = LuxuryBlack
    ) { padding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
        ) {
            // Hero Banner
            item {
                HeroBannerSlider(events)
            }

            // Categories
            item {
                SectionTitle("Categories")
                CategoryRow()
            }

            // Upcoming Events
            item {
                SectionTitle("Upcoming Shows")
            }
            items(events) { event ->
                EventCard(event, onEventClick)
            }

            // Featured Models
            item {
                SectionTitle("Featured Models")
                FeaturedModelsRow()
            }

            // Featured Designers
            item {
                SectionTitle("Exhibition & Designers")
                FeaturedModelsRow() // Reusing row for demo
            }

            item {
                Spacer(modifier = Modifier.height(32.dp))
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeTopBar(onProfileClick: () -> Unit) {
    CenterAlignedTopAppBar(
        title = {
            Image(
                painter = painterResource(id = R.drawable.app_logo_1780920090437),
                contentDescription = null,
                modifier = Modifier.height(40.dp)
            )
        },
        actions = {
            IconButton(onClick = { /* TODO */ }) {
                Icon(Icons.Default.Notifications, contentDescription = null, tint = Gold)
            }
            IconButton(onClick = onProfileClick) {
                Box(
                    modifier = Modifier
                        .size(32.dp)
                        .clip(RoundedCornerShape(8.dp))
                        .background(Gold)
                ) {
                    // Profile Initials or Image
                    Text(
                        "U",
                        modifier = Modifier.align(Alignment.Center),
                        color = LuxuryBlack,
                        fontWeight = FontWeight.Bold
                    )
                }
            }
        },
        colors = TopAppBarDefaults.centerAlignedTopAppBarColors(
            containerColor = LuxuryBlack.copy(alpha = 0.9f)
        )
    )
}

@Composable
fun HeroBannerSlider(events: List<Event>) {
    val pagerState = rememberPagerState(pageCount = { events.size })
    if (events.isEmpty()) return

    Column(modifier = Modifier.fillMaxWidth()) {
        HorizontalPager(
            state = pagerState,
            modifier = Modifier
                .fillMaxWidth()
                .height(250.dp)
        ) { page ->
            val event = events[page]
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(16.dp)
                    .clip(RoundedCornerShape(20.dp))
            ) {
                AsyncImage(
                    model = event.imageUrl,
                    contentDescription = null,
                    modifier = Modifier.fillMaxSize(),
                    contentScale = ContentScale.Crop
                )
                Box(
                    modifier = Modifier
                        .fillMaxSize()
                        .background(
                            Brush.verticalGradient(
                                listOf(Color.Transparent, LuxuryBlack.copy(alpha = 0.8f))
                            )
                        )
                )
                Column(
                    modifier = Modifier
                        .align(Alignment.BottomStart)
                        .padding(16.dp)
                ) {
                    if (event.isLive) {
                        Surface(
                            color = Color.Red,
                            shape = RoundedCornerShape(4.dp),
                            modifier = Modifier.padding(bottom = 8.dp)
                        ) {
                            Text(
                                "LIVE",
                                color = Color.White,
                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 2.dp),
                                fontSize = 10.sp,
                                fontWeight = FontWeight.Bold
                            )
                        }
                    }
                    Text(event.title, color = Color.White, fontWeight = FontWeight.Bold, fontSize = 20.sp)
                    Text(event.venue, color = Gold, fontSize = 12.sp)
                }
            }
        }
    }
}

@Composable
fun SectionTitle(title: String) {
    Text(
        text = title,
        color = Gold,
        modifier = Modifier.padding(16.dp),
        style = MaterialTheme.typography.titleLarge,
        fontWeight = FontWeight.Bold,
        letterSpacing = 1.sp
    )
}

@Composable
fun CategoryRow() {
    val categories = listOf("Runway", "Bridal", "Ethnic", "Modern", "Fusion")
    LazyRow(
        contentPadding = PaddingValues(horizontal = 16.dp),
        horizontalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        items(categories) { category ->
            Surface(
                color = LuxuryGrey,
                shape = RoundedCornerShape(12.dp),
                border = BorderStroke(1.dp, Gold.copy(alpha = 0.3f))
            ) {
                Text(
                    text = category,
                    color = Color.White,
                    modifier = Modifier.padding(horizontal = 20.dp, vertical = 12.dp),
                    fontWeight = FontWeight.SemiBold
                )
            }
        }
    }
}

@Composable
fun EventCard(event: Event, onClick: (String) -> Unit) {
    Card(
        onClick = { onClick(event.id) },
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 8.dp),
        colors = CardDefaults.cardColors(containerColor = LuxuryGrey),
        shape = RoundedCornerShape(16.dp)
    ) {
        Row(modifier = Modifier.height(100.dp)) {
            AsyncImage(
                model = event.imageUrl,
                contentDescription = null,
                modifier = Modifier
                    .width(100.dp)
                    .fillMaxHeight(),
                contentScale = ContentScale.Crop
            )
            Column(modifier = Modifier.padding(16.dp)) {
                Text(event.title, color = Color.White, fontWeight = FontWeight.Bold)
                Text(event.date, color = Gold, fontSize = 12.sp)
                Text(event.venue, color = Color.Gray, fontSize = 11.sp, maxLines = 1)
            }
        }
    }
}

@Composable
fun FeaturedModelsRow() {
    LazyRow(
        contentPadding = PaddingValues(horizontal = 16.dp),
        horizontalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        items(5) {
            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                Box(
                    modifier = Modifier
                        .size(80.dp)
                        .clip(CircleShape)
                        .background(LuxuryGrey)
                ) {
                    // Model Image Placeholder
                }
                Text("Model ${it + 1}", color = Color.White, fontSize = 12.sp, modifier = Modifier.padding(top = 8.dp))
            }
        }
    }
}
