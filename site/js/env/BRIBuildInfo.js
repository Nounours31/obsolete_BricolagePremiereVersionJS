'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-13 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1480';
    this._commitGIT = 'cafa20a276adffce607a581ca39e0181031fad18';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}