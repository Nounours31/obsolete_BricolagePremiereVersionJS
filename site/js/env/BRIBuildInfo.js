'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-13 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1724';
    this._commitGIT = 'c72e94e69b6a15b97e620b3958ca6e08c650fc22';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}