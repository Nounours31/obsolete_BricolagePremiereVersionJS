'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-28 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-566';
    this._commitGIT = 'a364798b4907c243a98b521d3a14d91a8dd889fb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}