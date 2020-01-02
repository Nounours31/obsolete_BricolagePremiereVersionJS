'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-02 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-828';
    this._commitGIT = 'f27d40506911d5b7f025879441a1c160212305ca';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}