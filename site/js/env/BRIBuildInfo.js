'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-28 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-933';
    this._commitGIT = '00a4a9f213f5ff5e54b244641223a2dfaa444d91';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}