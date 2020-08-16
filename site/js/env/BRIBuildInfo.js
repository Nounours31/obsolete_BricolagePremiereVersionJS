'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-16 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1735';
    this._commitGIT = '3978086f30b094d1b42c18c4aef0bbebcaeb91c7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}