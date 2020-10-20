'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-20 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1997';
    this._commitGIT = 'a180c4293b5d551ee0e34d9f7961b2bf51d0f255';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}