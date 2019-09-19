'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-19 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-409';
    this._commitGIT = 'af217ce3acad4fbd3ed8fca62ed5219cf658876d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}