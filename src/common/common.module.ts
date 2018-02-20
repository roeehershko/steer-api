import {Global, Module} from '@nestjs/common';
import {UniqueEmail} from "./constraints/email-exists";

@Global()
@Module({
  imports: [],
  controllers: [],
  components: [
      UniqueEmail
  ],
})
export class CommonModule {}
