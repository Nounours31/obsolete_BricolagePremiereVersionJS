'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-10 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-735';
    this._commitGIT = 'a82cffc022dffeabd750724f4502671fd828af66';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}