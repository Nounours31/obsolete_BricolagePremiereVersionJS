'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-21 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1999';
    this._commitGIT = '880fe2bf522e0cbfb1a401b26c10ee80c0ac4f7e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}