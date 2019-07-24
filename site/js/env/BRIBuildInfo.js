'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-24 12:00:16';
    this._versionBuild = 'jenkins-Bricolage-180';
    this._commitGIT = 'cb61ebd1efabc0c46199a79129eb7a6d1a6241c9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}