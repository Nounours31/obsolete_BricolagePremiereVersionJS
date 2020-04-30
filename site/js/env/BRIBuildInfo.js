'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-30 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1306';
    this._commitGIT = '973e813650c8307f238b58a222443221bcd311b2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}