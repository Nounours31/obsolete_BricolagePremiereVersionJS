'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-07 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-971';
    this._commitGIT = '9aa18d537df66f1aac589a631405cf63ec93a1cd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}