'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-06 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1571';
    this._commitGIT = '1f25efa9ca478fc1d0a5899081cb2f9251a179ee';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}