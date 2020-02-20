'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-20 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1024';
    this._commitGIT = '28f85f9a98bb1f0468d704781be2f7ef493f16c8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}