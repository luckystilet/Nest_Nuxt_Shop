import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { BookmarkModule } from './bookmark/bookmark.module'
import { ProductsModule } from './products/products.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
  imports: [
    AuthModule,
    UserModule,
    BookmarkModule,
    ProductsModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
