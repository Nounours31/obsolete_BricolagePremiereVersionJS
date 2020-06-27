'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-27 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1535';
    this._commitGIT = '59a83eb3f801b054c32d9c9bc43497a2abfc80f1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}